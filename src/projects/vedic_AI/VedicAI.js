import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import OutputWindow from "./OutputWindow";

function VedicAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const key='AIzaSyCOBgjtYVp8WoJZQO3SZGQbijSsNfyVpsw';

  async function generateAnswer(e) {
    
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${key}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
console.log(response)
      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="bg-blue-300 p-3">
      <h1 className="text-5xl font-bold text-center mt-20 text-blue-800">Vedic AI <span ><i class="fa-solid fa-wand-magic-sparkles text-4xl text-pink-800"></i></span></h1> 
        <form         
          className="w-[80%] mt-5 m-auto text-center rounded  py-2 relative"
        >
          <i class="fa-solid fa-bullseye absolute right-16 cursor-pointer active:text-red-900 active:scale-95 select-none top-9 text-4xl text-red-700"
            type="submit"
            disabled={generatingAnswer}
            onClick={generateAnswer}
          ></i>    
          <textarea
            required
            className="border-2 border-gray-300 rounded-xl w-11/12 my-2 min-h-fit p-3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
          ></textarea>
          {/* <button
            type="submit"
            className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
            
          >
            Generate answer
          </button> */}
        </form>

        <div className="w-[80%] m-auto text-center rounded-3xl bg-gray-100 my-1">
          {/* <ReactMarkdown className="p-3">{answer}</ReactMarkdown> */}
          <OutputWindow answer={answer}/>
        </div>
      </div>
    </>
  );
}

export default VedicAI;
 