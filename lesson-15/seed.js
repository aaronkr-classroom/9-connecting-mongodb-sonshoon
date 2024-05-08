// seed.js
"use strict";

const { promiseImpl } = require("ejs");

/**
 * Listing 15.9 (p. 224)
 * 새로운 데이터 생성
 */
// 모듈 가져오기

const mongoose=requrire("mongoose"),
  subscriber=require("./models/subscriber");
// 데이터베이스 연결 설정
mongoose.connect(
  "mongodb+srv://ut-node:TIzqsIk4hXJdnHPT@ut-node.a39enzf.mongodb.net/?retryWrites=true&w=majority&appName=ut-node", // 데이터베이스 연결 설정 Atlas 경로
  { useNewUrlParser: true } 
);

mongoose.connection;

// subscribers 배열 생성 (5개 이상)
var subscribers = [
  {
    name: "son",
    email: "dodossh",
    phoneNumber: "0110455225",
  },
  {
    name: "hon",
    email: "dodo",
    phoneNumber: "011235225",
  },
  {
    name: "add",
    email: "nostals",
    phoneNumber: "01486234",
  }, {
    name: "stals",
    email: "tals",
    phoneNumber: "10875979",
  }, {
    name: "kim",
    email: "d32452",
    phoneNumber: "1397498222",
  }, {
    name: "jong",
    email: "heyk",
    phoneNumber: "023542224",
  }
];

// 기존 데이터 제거
Subscriber.deleteMany()
  .exec()
  .then(()=>{
    console.log("Subcrivers deleted!");
  });

var commands = [];

// 프라미스 생성을 위한 구독자 객체 루프
subscribers.forEach(S =>{
  commands.push(
    Subscriber.create({
      name:s.name,
      email:s.email,
      phoneNumber:S.phoneNumber
    })
  );
});

// 프라미스 생성 후 로깅 작업
Promise.all(commands)
  .then((r) => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(e => {
    console.log(`Error: ${e}`);
  });