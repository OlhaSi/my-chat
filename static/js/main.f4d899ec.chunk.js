(this["webpackJsonpmy-chat"]=this["webpackJsonpmy-chat"]||[]).push([[0],[,,,function(e,t,a){e.exports={chatContainer:"chat-content_chatContainer__Amo5g",receivedWrapper:"chat-content_receivedWrapper__cEnNO",sentWrapper:"chat-content_sentWrapper__2UNj-",messageDetails:"chat-content_messageDetails__1-ksd",textReceived:"chat-content_textReceived__1oWZV",textSent:"chat-content_textSent__2Cakc",timeReceived:"chat-content_timeReceived__36cq5",timeSent:"chat-content_timeSent__1Dlfn"}},function(e,t,a){e.exports={contactsContainer:"contacts_contactsContainer__38Fq7",messageContainer:"contacts_messageContainer__KChwu",messageContainerActive:"contacts_messageContainerActive__28FtB",contentWrapper:"contacts_contentWrapper__2TyLV",content:"contacts_content__9CC3S",message:"contacts_message__3FSZf",date:"contacts_date__2kKnx"}},,,function(e,t,a){e.exports={avatar:"search-bar_avatar__2Pe8A",searchBarContainer:"search-bar_searchBarContainer__3Vlhi",searchInput:"search-bar_searchInput__11KSw",searchInputText:"search-bar_searchInputText__19xxX"}},,function(e,t,a){e.exports={messageContainer:"message-bar_messageContainer__3YW3M",sendInput:"message-bar_sendInput__3GB7G",sendInputText:"message-bar_sendInputText__3h5xu"}},,,,,,function(e,t,a){e.exports={App:"App_App__16ZpL"}},function(e,t,a){e.exports={containerLeftSide:"left-side_containerLeftSide__1iSe-"}},function(e,t,a){e.exports={avatar:"avatar_avatar__1QlmY"}},function(e,t,a){e.exports={container:"chat_container__2lJ3D"}},function(e,t,a){e.exports={headerContainer:"header_headerContainer__2UoPr"}},,,function(e){e.exports=JSON.parse('{"chats":[{"person":{"id":1,"icon":"/img/0.jpeg","name":"Josefina"},"messages":[{"id":100,"message":"Hi! How are you?","timestamp":1621947600000,"type":"received"},{"id":101,"message":"Hi, I\'m fine. Thanks. And you?","timestamp":1621948200000,"type":"sent"},{"id":102,"message":"Me too","timestamp":1621948800000,"type":"received"}]},{"person":{"id":2,"icon":"/img/3.jpeg","name":"Alice Kaufmann"},"messages":[{"id":200,"message":"Do you have any ideas?","timestamp":1627893000000,"type":"received"},{"id":201,"message":"I don\'t know","timestamp":1627893300000,"type":"sent"},{"id":202,"message":"Ok. Let\'s speak another time","timestamp":1627893900000,"type":"received"},{"id":2,"message":"Bye","timestamp":1627894080000,"type":"sent"}]},{"person":{"id":3,"icon":"/img/2.jpeg","name":"Robert "},"messages":[{"id":300,"message":"Hello","timestamp":1626764400000,"type":"received"},{"id":301,"message":"Hi. Nice to hear from you","timestamp":1626768000000,"type":"sent"},{"id":302,"message":"Do you have any plans for a weekend?","timestamp":1626768600000,"type":"received"}]},{"person":{"id":4,"icon":"/img/1.jpeg","name":"Fabian Mueller"},"messages":[{"id":400,"message":"Hello!","timestamp":1631787600000,"type":"received"},{"id":401,"message":"Bye!","timestamp":1631788800000,"type":"sent"}]},{"person":{"id":5,"icon":"/img/4.jpeg","name":"Daniel"},"messages":[{"id":500,"message":"Hi. How are you doing?","timestamp":1631439600000,"type":"sent"},{"id":501,"message":"Nice, thanks","timestamp":1631443200000,"type":"received"}]},{"person":{"id":6,"icon":"/img/5.jpeg","name":"Patricia Kaas"},"messages":[{"id":600,"message":"Thanks for your help","timestamp":1631373000000,"type":"sent"}]},{"person":{"id":7,"icon":"/img/6.jpeg","name":"Carlo Muratto"},"messages":[{"id":700,"message":"See you tomorrow","timestamp":1628683800000,"type":"received"},{"id":701,"message":"Bye. Have a nice day!","timestamp":1628684100000,"type":"sent"}]}]}')},,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(14),i=a.n(c),r=(a(28),a(23)),o=a(13),m=a(6),d=a(15),p=a.n(d),l=a(16),u=a.n(l),h=a(7),j=a.n(h),v=a(11),g=a(1),b=function(e){var t=e.onFilter,a=Object(s.useCallback)((function(e){t(e.target.value)}),[t]);return Object(g.jsxs)("div",{className:j.a.searchBarContainer,children:[Object(g.jsx)("div",{className:j.a.avatar,children:Object(g.jsx)(v.b,{size:"50px",color:"slategrey"})}),Object(g.jsxs)("div",{className:j.a.searchInput,children:[Object(g.jsx)(v.a,{size:"12px",color:"silver"}),Object(g.jsx)("input",{className:j.a.searchInputText,placeholder:"Search or start new chat",type:"text",onChange:a})]})]})},_=a(4),x=a.n(_),f=a(17),O=a.n(f),C=function(e){var t=e.src;return Object(g.jsx)("img",{src:t,alt:"avatar",className:O.a.avatar})},y=function(e){var t=e.chats,a=e.activeChat,n=e.setActiveChat,c=Object(s.useCallback)((function(e){n(e)}),[n]);return Object(g.jsxs)("div",{className:x.a.contactsContainer,children:[Object(g.jsx)("p",{children:"Chats"}),t.map((function(e){var t,s=e.person,n=e.messages,i=x.a.messageContainer;return s.id===a.person.id&&(i+=" "+x.a.messageContainerActive),Object(g.jsxs)("div",{className:i,onClick:c.bind({},e),children:[Object(g.jsxs)("div",{className:x.a.contentWrapper,children:[Object(g.jsx)(C,{src:s.icon}),Object(g.jsxs)("div",{className:x.a.content,children:[Object(g.jsx)("div",{children:s.name}),n.length>0&&Object(g.jsx)("div",{className:x.a.message,children:n[n.length-1].message})]})]}),n.length>0&&Object(g.jsx)("div",{className:x.a.date,children:(t=n[n.length-1].timestamp,new Date(t).toDateString())})]},s.id)}))]})},N=function(e){var t=e.chats,a=e.activeChat,n=e.setActiveChat,c=Object(s.useState)(t),i=Object(m.a)(c,2),r=i[0],o=i[1];Object(s.useEffect)((function(){o(t)}),[t]);var d=Object(s.useCallback)((function(e){if(""===e)o(t);else{var a=[];t.forEach((function(t){t.person.name.toLowerCase().includes(e.toLowerCase())&&a.push(t)})),o(a)}}),[t]);return Object(g.jsxs)("div",{className:u.a.containerLeftSide,children:[Object(g.jsx)(b,{onFilter:d}),Object(g.jsx)(y,{chats:r,activeChat:a,setActiveChat:n})]})},S=a(18),k=a.n(S),w=a(19),I=a.n(w),A=function(e){var t=e.person;return Object(g.jsxs)("div",{className:I.a.headerContainer,children:[Object(g.jsx)(C,{src:t.icon}),Object(g.jsx)("span",{children:t.name})]})},D=a(3),T=a.n(D),L=function(e){return new Date(e).toLocaleString()},M=function(e){var t=e.activeChat,a=t.messages,s=t.person;return Object(g.jsx)("div",{className:T.a.chatContainer,children:null===a||void 0===a?void 0:a.map((function(e){return e?"received"===e.type?Object(g.jsxs)("div",{className:T.a.receivedWrapper,children:[Object(g.jsxs)("div",{className:T.a.messageDetails,children:[Object(g.jsx)(C,{src:null===s||void 0===s?void 0:s.icon}),Object(g.jsx)("div",{className:T.a.textReceived,children:e.message})]}),Object(g.jsx)("div",{className:T.a.timeReceived,children:L(e.timestamp)})]},e.id):Object(g.jsxs)("div",{className:T.a.sentWrapper,children:[Object(g.jsx)("div",{className:T.a.textSent,children:e.message}),Object(g.jsx)("div",{className:T.a.timeSent,children:L(e.timestamp)})]},e.id):null}))})},R=a(9),W=a.n(R),B=a(21),F=a(12),H=a.n(F),J=a(20);function E(){return(E=Object(J.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.chucknorris.io/jokes/random");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(e){var t=e.addNewSendMessage,a=e.activeChat,n=Object(s.useRef)(null),c=function(e){return setTimeout((function(){(function(){return E.apply(this,arguments)})().then((function(e){return e.json()})).then((function(a){console.log("----getRandomJoke----",e),t(a.value,"received",e)}))}),2e3)},i=Object(s.useCallback)((function(){console.log("----sent----",a.person.id),t(n.current.value,"sent",a.person.id),n.current.value="",c(a.person.id)}),[a,n]),r=Object(s.useCallback)((function(){""!==n.current.value&&i()}),[t,n]),o=Object(s.useCallback)((function(e){""!==n.current.value&&"Enter"===e.key&&i()}),[t,n]);return Object(g.jsx)("div",{className:W.a.messageContainer,children:Object(g.jsxs)("div",{className:W.a.sendInput,children:[Object(g.jsx)(B.a,{size:"20px",color:"slategrey",onClick:r}),Object(g.jsx)("input",{ref:n,onKeyDown:o,className:W.a.sendInputText,placeholder:"Type your message",type:"text"})]})})},P=function(e){var t=e.activeChat,a=e.addNewSendMessage,s=e.addNewReceivedMessage;return Object(g.jsxs)("div",{className:k.a.container,children:[Object(g.jsx)(A,{person:t.person}),Object(g.jsx)(M,{activeChat:t,addNewReceivedMessage:s}),Object(g.jsx)(K,{activeChat:t,addNewSendMessage:a})]})},z=a(22),U="local-chats",V=localStorage.getItem(U),Z=V?JSON.parse(V):void 0,q=function(){var e=Object(s.useState)(Z||z.chats),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(a[0]),i=Object(m.a)(c,2),d=i[0],l=i[1],u=Object(s.useCallback)((function(e){var t=function(e){return e.sort((function(e,t){return t.messages[t.messages.length-1].timestamp-e.messages[e.messages.length-1].timestamp}))}(e);localStorage.setItem(U,JSON.stringify(t)),n(t),l(t[0]),console.log("----onChatsUpdate----",t)}),[]);Object(s.useEffect)((function(){u(a)}),[a,u]);var h=Object(s.useCallback)((function(e,t,s){var n=[];a.forEach((function(a){if(a.person.id===s){var c=+new Date;n.push(Object(o.a)(Object(o.a)({},a),{},{messages:[].concat(Object(r.a)(a.messages),[{id:c,message:e,timestamp:c,type:t}])}))}else n.push(a)})),u(n)}),[d.person.id,a,u]);return Object(g.jsxs)("div",{className:p.a.App,children:[Object(g.jsx)(N,{chats:a,activeChat:d,setActiveChat:l}),Object(g.jsx)(P,{activeChat:d,addNewSendMessage:h})]})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(q,{})}),document.getElementById("root")),G()}],[[31,1,2]]]);
//# sourceMappingURL=main.f4d899ec.chunk.js.map