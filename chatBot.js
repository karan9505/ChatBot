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
Logo.src="./PIC/Chat.png";
Logo.setAttribute("class","Logo")
Logo.setAttribute("onclick","AddBot()")
document.body.appendChild(Logo)

let Close=document.createElement("img");
Close.src="./PIC/Close.png";
Close.setAttribute("class","Close");
Close.setAttribute("onclick","RemoveBot()");
document.body.appendChild(Close);
Close.style.visibility="hidden";

let Mini=document.createElement("img");
Mini.src="./PIC/Mini.png";
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

function GetTime()
{
    let ct=new Date();
    return ct.getHours()+":"+ct.getMinutes()+":"+ct.getSeconds();
}

function BotResponse()
{

    let umain=document.createElement('div');
    let bmain=document.createElement('div');
    let tb=document.createElement('p');
    let tu=document.createElement('p');
    let BotReply=document.createElement("p");
    let UserReply=document.createElement("p");
    tb.setAttribute("class","time");
    tu.setAttribute("class","time");
    umain.setAttribute("class","UserReplyID");
    bmain.setAttribute("class","BotReplyID");
    BotReply.setAttribute("class","text");
    UserReply.setAttribute("class","text");
    if(UserText.value=="")
    {
        tb.innerText=GetTime();
        BotReply.innerHTML="Oops it sems like text box is empty. Dont't want to talk?";
        bmain.appendChild(BotReply)
        bmain.appendChild(tb);
        ScrollWindow.appendChild(bmain);
    }
    else
    {
        if(MsgCount==0)
        {
            tu.innerText=GetTime();
            UserReply.innerHTML=UserText.value;
            umain.appendChild(UserReply);
            umain.appendChild(tu);
            ScrollWindow.appendChild(umain);

            tb.innerText=GetTime();
            BotReply.innerText="Hello, FullForm bot here to help you. Select one of the following short form.\n1.ES\n2.IDE\n3.GUI\n4.IIFE\n5.DOM";
            bmain.appendChild(BotReply);
            bmain.appendChild(tb);
            ScrollWindow.appendChild(bmain);
            MsgCount++;
        }
        else
        {
            tu.innerText=GetTime();
            UserReply.innerHTML=UserText.value;
            umain.appendChild(UserReply);
            umain.appendChild(tu);
            ScrollWindow.appendChild(umain);

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
            tb.innerText=GetTime();
            bmain.appendChild(BotReply);
            bmain.appendChild(tb);
            ScrollWindow.appendChild(bmain);
        }
    }
    UserText.value="";
    if(ScrollWindow)
    {
        ScrollWindow.scrollTop=ScrollWindow.scrollHeight;
    }
}