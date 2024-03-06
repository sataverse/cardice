import styled from "styled-components";
import reviewData from "../../Data/review.json"
import gameData from "../../Data/boardgame.json"
import { useState, useEffect } from "react";

const Wrapper = styled.div`
    padding: 10px;
`

const Text = styled.div`
    width: 100px;
`

const users = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
var shuffledArray = [...users].sort(() => 0.5 - Math.random());
var like = Math.floor(Math.random() * 10);
var year = Math.floor(Math.random() * 4) + 2020;
var month = Math.floor(Math.random() * 12) + 1;
var day = Math.floor(Math.random() * 28) + 1;
var hour = Math.floor(Math.random() * 24);
var minute = Math.floor(Math.random() * 60);

const DataMaker = () => {
    const[id, setId] = useState(630);
    const [datas, setDatas] = useState([]);
    const [data, setData] = useState({
        "id" : 0,
        "gameid" : 0,
        "userid" : 0,
        "rating" : 10,
        "comment" : "",
        "date" : [0, 0, 0, 0, 0],
        "like" : []
    });

    const changeGameID = num => setData({...data, "gameid" : parseInt(num)})
    const changeUserID = num => setData({...data, "userid" : parseInt(num)})
    const changeRating = num => setData({...data, "rating" : parseInt(num)})
    const changeComment = str => setData({...data, "comment" : str})
    const save = () => {
        setData({...data, "id" : id, "date" : [year, month, day, hour, minute], "like" : shuffledArray.slice(0, like)});
        setId(id + 1);
        setDatas([...datas, data]);
        shuffledArray = [...users].sort(() => 0.5 - Math.random());
        like = Math.floor(Math.random() * 10);
        year = Math.floor(Math.random() * 4) + 2020;
        month = Math.floor(Math.random() * 12) + 1;
        day = Math.floor(Math.random() * 28) + 1;
        hour = Math.floor(Math.random() * 24);
        minute = Math.floor(Math.random() * 60);
    }

    return(
        <div>
            <Wrapper className="frow">
                <Text>{id - 1}</Text>
            </Wrapper>
            <Wrapper className="frow">
                <Text>{gameData[data.gameid].title}</Text>
            </Wrapper>
            <Wrapper className="frow">
                <Text>{'게임 아이디'}</Text>
                <input type="number" min="0" max="199" step="1" onChange={e => changeGameID(e.target.value)} />
            </Wrapper>
            <Wrapper className="frow">
                <Text>{'유저 아이디'}</Text>
                <input type="number" min="3" max="22" step="1" onChange={e => changeUserID(e.target.value)} />
            </Wrapper>
            <Wrapper className="frow">
                <Text>{'평점'}</Text>
                <input type="number" min="1" max="10" step="1" onChange={e => changeRating(e.target.value)} />
            </Wrapper>
            <Wrapper className="frow">
                <Text>{'평가'}</Text>
                <input type="text" onChange={e => changeComment(e.target.value)} />
            </Wrapper>
            <Wrapper>
                <button onClick={() => save()}>{'저장'}</button>
            </Wrapper>
            {datas.map(d => <div>{JSON.stringify(d) + ','}</div>)}
        </div>
    );
}

export default DataMaker;