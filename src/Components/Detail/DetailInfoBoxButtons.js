import { useState } from "react";
import { loadLocalStorage, saveLocalStorage } from "../../Modules/util";
import { useToken } from "../../Modules/store";
import IconButton from "../Others/IconButton";
import IconTextButton from "../Others/IconTextButton";
import DetailInfoReviewModal from "./DetailInfoReviewModal";
import { EmptyStarIcon, FillStarIcon, EmptyHeartIcon, FillHeartIcon, YoutubeIcon } from "../Svg/ButtonIcon";

const DetailInfoBoxButtons = ({isWindowSmall, gameInfo, myReview, saveMyReview, changeModal}) => {
    const token = useToken();
    const openYoutube = () => window.open(gameInfo.youtube, '_blank', 'noopener, noreferrer');
    const getLikeStatus = () => loadLocalStorage('like').boardgame.indexOf(gameInfo.id) !== -1;

    const likeGame = async () => {
        try {
            const response = await fetch('http://localhost:3030/boardgame/like', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ token, gameid: gameInfo.id, userid: loadLocalStorage('id'), status: !getLikeStatus() })
            });
            const { code } = await response.json();
            if(code === 200) {
                const temp = loadLocalStorage('like');
                if(getLikeStatus()) {
                    temp.boardgame = temp.boardgame.filter(item => item !== gameInfo.id);
                    setLike(false);
                    setLikeNum(likeNum - 1);
                }
                else {
                    temp.boardgame.unshift(gameInfo.id);
                    setLike(true);
                    setLikeNum(likeNum + 1);
                }
                saveLocalStorage('like', temp);
            }
        } catch(error) {
            console.log(error);
        }
    }

    const saveReview = async (rating, comment) => {
        try {
            const today = new Date();
            if(!myReview) {
                const response = await fetch('http://localhost:3030/review/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({ 
                        token, 
                        gameid: gameInfo.id, 
                        userid: loadLocalStorage('id'), 
                        rating,
                        comment,
                        date: [
                            today.getFullYear(),
                            today.getMonth() + 1,
                            today.getDate(),
                            today.getHours(),
                            today.getMinutes()
                        ],
                        nickname: loadLocalStorage('nickname')
                    })
                });
                const { code, data } = await response.json();
                if(code === 200) {
                    const myReviewIds = loadLocalStorage('review');
                    myReviewIds.push(data.id);
                    saveLocalStorage('review', myReviewIds);
                    saveMyReview(data, 0);
                }
            }
            else {
                const response = await fetch('http://localhost:3030/review/modify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({ 
                        token,
                        reviewid: myReview.id,
                        gameid: myReview.gameid,
                        rating,
                        previous : myReview.rating,
                        comment,
                        date: [
                            today.getFullYear(),
                            today.getMonth() + 1,
                            today.getDate(),
                            today.getHours(),
                            today.getMinutes()
                        ]
                    })
                });
                const { code, data } = await response.json();
                if(code === 200) {
                    saveMyReview(data, 0);
                }
            }
            setReviewModal(false);
        } catch(error) {
            console.log(error);
        }
    }

    const deleteReview = async () => {
        try {
            const response = await fetch('http://localhost:3030/review/delete', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    token,
                    rating: myReview.rating,
                    reviewid: myReview.id,
                    gameid: gameInfo.id,
                    userid: loadLocalStorage('id')
                })
            });
            const { code } = await response.json();
            if(code === 200) {
                const myReviewIds = loadLocalStorage('review');
                saveLocalStorage('review', myReviewIds.filter(item => item !== myReview.id));
                saveMyReview(myReview, 1);
                setReviewModal(false);
            }
        } catch(error) {
            console.log(error);
        }
    }

    const [isLike, setLike] = useState(!loadLocalStorage('id') ? false : getLikeStatus());
    const [likeNum, setLikeNum] = useState(gameInfo.like);
    const [reviewModal, setReviewModal] = useState(false);

    return (
        <>
            <div className='frow fjsbetween'>
                {isWindowSmall ? <IconTextButton icon={<YoutubeIcon width={24} height={24} />} buttonWidth={90} text={'동영상'} onClick={() => openYoutube()} /> : <IconButton icon={<YoutubeIcon width={30} height={30} />} buttonWidth={30} onClick={() => openYoutube()} />}
                <IconTextButton icon={isLike ? <FillHeartIcon width={24} height={24} /> : <EmptyHeartIcon width={24} height={24} />} buttonWidth={90} text={likeNum} onClick={!loadLocalStorage('id') ? () => changeModal(1) : likeGame} />
                <IconTextButton icon={!myReview ? <EmptyStarIcon width={24} height={24} /> : <FillStarIcon width={24} height={24} />} buttonWidth={90} text={'내 평가'} onClick={() => setReviewModal(true)} />
            </div>
            {reviewModal ? <DetailInfoReviewModal myReview={myReview} saveReview={saveReview} deleteReview={deleteReview} closeModal={() => setReviewModal(false)} /> : null}
        </>
    );
}

export default DetailInfoBoxButtons;