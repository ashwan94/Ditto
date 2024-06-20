// import mqtt from "mqtt";
// import {useEffect, useState} from "react";
//
// export function MQTTSub() {
//
//     // MQTT 세팅
//     const URL = "nextit.or.kr:21883"; // 21883 은 protocol 이며 생략되면 error 난다
//     const client = mqtt.connect(URL,{
//         connectTimeout: 5000,
//         hostname:"nextit.or.kr",
//         port:29001,
//     });
//
//     // MQTT 에서 subscribe 한 message(착석 여부) 에 대한 data 처리
//     const [message, setMessage] = useState(null);
//     const [num, setNum] = useState(0);
//     useEffect(() => {
//         // 최초 null 로 시작할때 브라우저 로딩 시 발생하는 에러에 대한 처리
//         if(message){
//             console.log("착석 여부 : ");
//             console.log(message)
//             console.log(num);
//         }
//     }, [message]);
//
//     // MQTT connect 에 대한 event -> subscribe, publish 모두 처리
//     client.on("connect", () => {
//         // 아두이노에서 publish 하는 경로와 동일하게 subscribe 경로 지정
//         client.subscribe("/IoT/Sensor/Ditto", (err) => {
//             if (!err) {
//                 // React 에서 publish 할 테스트용 message
//                 client.publish("/React/Ditto", "React 에서 발송된 message");
//             }
//         });
//     });
//
//     // MQTT broker 에서 message 가 감지됐을 경우 작동되는 event
//     // setTimeout 등 별도의 함수를 추가로 실행시키지 않아도 broker 에 새로운 message 가 감지되면 알아서 실행됨
//     client.on("message", (topic, message) => {
//         // message is Buffer
//         const parser = JSON.parse(message.toString());
//         setMessage(parser); // MQTT 에서 가져온 data 를 useState 로 update
//         setNum(num+1);
//         client.end();
//     });
// }