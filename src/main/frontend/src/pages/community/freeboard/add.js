import React, {useCallback, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import "../../../css/addBoard.css"

export default function FreeBoardAdd() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    const titleOnChangeHandler = useCallback((e) => {
        setTitle(e.target.value);
    }, []);

    const contentOnChangeHandler = useCallback((e) => {
        setContent(e.target.value);
    }, []);

    const fileOnChangeHandler = useCallback((e) => {
        setFile(e.target.files);
    }, []);

    const boardSubmit = async (e) => {

        e.preventDefault();
        const postData = { // 보낼정보
            freeTitle: title,
            freeContent: content,
            memberId: 'testUser', // test용 아이디 로그인한 사용자의 ID를 사용 memberId
        };

        try {
            const res = await axios.post('/freeboard', postData);
            if (res.status === 200) {
                navigate('/community/freeBoard/list');
            }
        } catch (error) {
            console.error('에러야! :', error);
        }
    };

    return (
        <div className="card" style={{marginTop:" 10rem"}}>
            <div className="card-header1">
                <Link to={`/community/freeBoard/list`}><h3 className="center">자유게시판</h3></Link>
            </div>
            <form onSubmit={boardSubmit}>
                <div className="card-write">
                    <div className="title-w">
                        <label>
                            제목
                            <input
                                type="text"
                                placeholder="제목을 입력하세요."
                                value={title}
                                onChange={titleOnChangeHandler} required
                            />
                        </label>
                    </div>
                    <div className="msg">
                        <label>
                            내용
                            <textarea
                                placeholder="내용을 입력하세요."
                                value={content}
                                onChange={contentOnChangeHandler} required
                            ></textarea>
                        </label>
                        <input
                            type="file"
                            onChange={fileOnChangeHandler}
                        />
                    </div>
                    <button type="submit" className="float-right btn" style={{backgroundColor:"orange", color:"white"}}>완료</button>
                </div>
            </form>
        </div>
    );

}
