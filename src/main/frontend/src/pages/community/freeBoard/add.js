import React from 'react';
import "../../../css/addBoard.css"
import ReactQuill from '../../../js/ReactQuill'

export default function FreeBoardAdd() {
    const addBtn = true; // 새 글 쓰기 상태 버튼
    return (
        <article className="mt-32 ml-32 mr-32">
            <ReactQuill addBtn={addBtn}/>
        </article>
    );
}