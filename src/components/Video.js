import "./Video.css";

function Video({
  title,
  id,
  channel = "NEW LEARNER's",
  views,
  time,
  verified,
}) {
  // console.log(props)
  // let topic = "React JS"
  //  let bg ="dark";
  // let verified = true;

  // let channelJSX;
  // if(verified){
  //   channelJSX= <div className="channel">{channel}✔️</div>
  // }else
  // {
  //  channelJSX= <div className="channel">{channel}</div>
  // }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/100`}
            alt="Katherine Johnson"
          />
          {/* <div className={bg} style={{backgroundColor:bgColor}}>{title} */}
        </div>
        <div className="title">{title}</div>
        {/* {verified ?  <div className="channel">{channel}✔️</div>
        :<div className="channel">{channel}</div>} */}
        <div className="channel">
          {channel}
          {verified && "✔️"}
        </div>
        <div className="views">
          {views}
          views<span>.</span>
          {time}
        </div>
      </div>
    </>
  );
}

// function Thumb(){
//     return <div>Thumb</div>
//    }

export default Video;
