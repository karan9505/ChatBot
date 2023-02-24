"use strict"

let clickCount=0;
let ChatWindow;
let Header;
let MsgCount=0;
let ScrollWindow;
let HeaderContent;
let UserQuery;
let SendButton;
let UserText;
let Logo=document.createElement("img");
Logo.src="./Chat.png";
Logo.setAttribute("class","Logo")
Logo.setAttribute("onclick","AddBot()")
document.body.appendChild(Logo)

let Close=document.createElement("img");
Close.src="./Close.png";
Close.setAttribute("class","Close");
Close.setAttribute("onclick","RemoveBot()");
document.body.appendChild(Close);
Close.style.visibility="hidden";

let Mini=document.createElement("img");
Mini.src="./Mini.png";
Mini.setAttribute("class","Mini");
Mini.setAttribute("onclick","MiniBot()");
document.body.appendChild(Mini);
Mini.style.visibility="hidden";

let BotData = 
{
    ES:"ECMAScript",
    IDE:"Integrated Development Environment",
    GUI:"Graphic User Interface",
    IIFE:"Immediately invoked function expression",
    DOM:"Document Object Model"
}

function AddBot()
{
    Logo.style.visibility="hidden";
    Close.style.visibility="visible";
    Mini.style.visibility="visible";
    ChatWindow=document.createElement("div");
    ChatWindow.setAttribute("class","Chatwindow");
    document.body.appendChild(ChatWindow);
    
    Header=document.createElement("div");
    Header.setAttribute("class","Header");
    ChatWindow.appendChild(Header);

    HeaderContent=document.createElement("p");
    HeaderContent.setAttribute("class","HeaderContent");
    HeaderContent.innerText="FullForm Bot Here";
    Header.appendChild(HeaderContent);

    ScrollWindow=document.createElement("div");
    ScrollWindow.setAttribute("class","ScrollWindow");
    ChatWindow.appendChild(ScrollWindow);

    UserQuery=document.createElement("div");
    UserQuery.setAttribute("class","UserQuery");
    ChatWindow.appendChild(UserQuery);

    UserText=document.createElement("input");
    UserText.setAttribute("placeholder","Ask Me....");
    UserText.setAttribute("type","text");
    UserText.setAttribute("class","UserText");
    UserText.setAttribute("id","EventListner");
    UserQuery.appendChild(UserText);
    
    SendButton=document.createElement("input");
    SendButton.setAttribute("type","button")
    SendButton.setAttribute("value","SEND");
    SendButton.setAttribute("onclick","BotResponse()")
    SendButton.setAttribute("class","SendButton")
    UserQuery.appendChild(SendButton);
}


function RemoveBot()
{
    document.body.removeChild(ChatWindow);
    Logo.style.visibility="visible";
    Mini.style.visibility="hidden";
    Close.style.visibility="hidden";
    clickCount=0;
    MsgCount=0;
}

function MiniBot()
{
    if(clickCount%2==0 && ChatWindow!=undefined)
        ChatWindow.style.visibility="hidden";
    else
        ChatWindow.style.visibility="visible";
    clickCount++;
}
document.body.addEventListener('keyup',(e)=>
{
    if(UserText!=null)
    {
        if(e.key=='Enter')
        BotResponse();
    }
});


function BotResponse()
{
    if(UserText.value=="")
    {
        let BotReply=document.createElement("p");
        BotReply.classList.add("BotReplyID");
        BotReply.innerHTML="Oops it sems like text box is empty. Dont't want to talk?";
        ScrollWindow.appendChild(BotReply);
    }
    else
    {
        if(MsgCount==0)
        {
            let UserReply=document.createElement("p");
            UserReply.classList.add("UserReplyID");
            UserReply.innerHTML=UserText.value;
            ScrollWindow.appendChild(UserReply);
            let BotReply=document.createElement("p");
            BotReply.classList.add("BotReplyID");
            BotReply.innerText="Hello, FullForm bot here to help you. Select one of the following short form.\n1.ES\n2.IDE\n3.GUI\n4.IIFE\n5.DOM";
            ScrollWindow.appendChild(BotReply);
            MsgCount++;
        }
        else
        {
            let UserReply=document.createElement("p");
            UserReply.classList.add("UserReplyID");
            UserReply.innerHTML=UserText.value;
            ScrollWindow.appendChild(UserReply);
            let BotReply=document.createElement("p");
            BotReply.classList.add("BotReplyID");
            let ind=-1;
            for(let ele in BotData)
            {
                if(ele==UserText.value)
                {
                    console.log(ele);
                    BotReply.innerText=BotData[String(ele)];
                    ind=1;
                    break;
                }
            }
            if(ind==-1)
            {
                BotReply.innerText="Query out of our data. Sorry for inconvenience";
            }
            ScrollWindow.appendChild(BotReply);
        }
    }
    UserText.value="";
    if(ScrollWindow)
    {
        ScrollWindow.scrollTop=ScrollWindow.scrollHeight;
    }
}
