import React from "react";
import MicIcon from "@material-ui/icons/Mic";
// import "../sql.css";
import bg from "../giphy1.gif";
import { motion } from "framer-motion";

function search({ setSearch, setConfig }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      class="p-8"
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: "white",
        }}
        class="bg-gray-800 opacity-90 flex items-center rounded-full -mt-3 shadow-xl border-2"
      >
        {/* <input
          className="textColor rounded-l-full bg-gray-800 w-full h-1/6 py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
        /> */}
        <input
          className="textColor rounded-l-full bg-gray-800 w-full h-1/6 py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="action"
          type="text"
          placeholder="Search"
        />

        <div className="p-4">
          <button
            className="bg-red-500 text-white rounded-full p-2 hover:bg-indigo-400 focus:outline-none w-7 h-7 flex items-center justify-center"
            onClick={() => {
              runSpeechRecognition(setSearch, setConfig);
            }}
          >
            <MicIcon />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function runSpeechRecognition(setSearch, setConfig) {
  // get output div reference
  // var output = document.getElementById("search");
  // get action element reference
  document.body.style.backgroundImage = `url(${bg})`;
  var action = document.getElementById("action");
  // new speech recognition object
  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  // This runs when the speech recognition service starts
  recognition.onstart = function () {
    const permissions = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    permissions
      .then((stream) => {
        action.value = "listening, please speak...";
        setSearch(null);
      })
      .catch((err) => {
        console.log(`${err.name} : ${err.message}`);
      });
  };

  recognition.onspeechend = function () {
    action.value = "stopped listening, hope you are done...";
    recognition.stop();
    document.body.style.backgroundImage = null;
  };

  var transcript;
  // This runs when the speech recognition service returns result
  recognition.onresult = function (event) {
    transcript = event.results[0][0].transcript;
    console.log(transcript);

    var confidence = event.results[0][0].confidence;
    action.value = transcript;
    setSearch(transcript);
    var docx = window.nlp(transcript);

    console.log(docx.data());
    // Sentences
    console.log(docx.sentences().data());

    // Tokenization
    var token = docx.sentences().terms().out("array");
    console.log(docx.sentences().terms().out("array"));
    // Here goes the JS object to automate graph output form.

    for (let i = 0; i < token.length; i++) {
      if (validConfigValues.has(token[i].toLowerCase())) {
        setConfig(token[i]);
        break;
      }
    }

    console.log(token.length);
    // Part of Speech Tagging  + Entities
    console.log(docx.sentences().terms().out("tags"));

    // Entity Recognition NER

    console.log(docx.topics().data());
    var listNouns = [];
    for (var i = 0; i < docx.nouns().json().length; i++) {
      listNouns.push(docx.nouns().json()[i].text);
    }
    var listVerbs = [];
    for (var i = 0; i < docx.verbs().json().length; i++) {
      listVerbs.push(docx.verbs().json()[i].text);
    }
    //  Visualforce.remoting.Manager.invokeAction('{!$RemoteAction.SpeechRecog.getObject}', listNouns,listVerbs, JSON.stringify(docx.sentences().terms().out('tags')),
    //                               function(result,event){
    //                                   if(event.status) {
    //                                   alert(result[0].expr0);
    //                                   }});
    action.classList.remove("hide");
  };

  console.log(transcript);

  // start recognition
  recognition.start();
}

export default search;

const validConfigValues = new Set([
  "columns",
  "column",
  "bars",
  "bar",
  "areas",
  "area",
  "lines",
  "line",
  "pies",
  "pie",
  "tables",
  "table",
  "all",
]);
