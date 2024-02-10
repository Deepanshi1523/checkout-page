import React, { useState } from 'react';
import "../styles/askedQuestion.css";

function AskedQuestion(){
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const faqData = [
    {
      question: 'What should I do on my first trip to Rome?',
      answer: "A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon.",
    },
    {
      question: 'What are some hidden gems to see in Rome?',
      answer: "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
    },
    {
      question: 'How much time should I spend in Rome?',
      answer: "A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon.",
    },
    {
      question: 'What food is Rome known for?',
      answer: "A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon.",
    },
    {
      question: 'What is the best way to get around Rome?',
      answer: "A first-time visitor to Rome may want to see some of the must-see sites like the Vatican Museums and Sistine Chapel, along with Saint Peter's Basilica; the one and only Colosseum, along with the Roman Forum and Palatine Hill, and one of the most amazing monuments from ancient Rome, the Pantheon.",
    },
  ];


  return (
    <div className="faq-container">
    {/* Render each question */}
    {faqData.map((item, index) => (
      <div key={index} className="faq-item">
        <div className="faq-question" onClick={() => toggleQuestion(index)}>
          <i className={`fa-solid fa-plus ${expandedIndex === index ? 'rotate' : ''}`}></i>
          <b>{item.question}</b>
        </div>
        {/* Conditionally render answer if the question is expanded */}
        {expandedIndex === index && (
          <div className="faq-answer">{item.answer}</div>
        )}
      </div>
    ))}
  </div>
  )
}

export default AskedQuestion;