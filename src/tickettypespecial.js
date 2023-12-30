import React, { useState, useEffect } from "react";
import "./tickettypespecial.css";
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";

const TicketTypeSpecial = () => {
    // 上一頁
    const goBack = () => {
        window.history.go(-1);
    };

    // 免費兌換券
    const [selectedFreeCount, setSelectedFreeCount] = useState(null);  
    const handleFreeCountChange = (count) => {
        setSelectedFreeCount(count);
    };
    const renderFreeCounts = () => {
        const counts = [1, 2, 3, 4, 5];
        return counts.map((count) => (
          <div
            key={count}
            className={`ticket-count ${selectedFreeCount === count ? "selected" : ""}`}
            onClick={() => handleFreeCountChange(count)}
          >
            {count}
          </div>
        ));
    };

    // 3D免費兌換券
    const [selected3DFreeCount, setSelected3DFreeCount] = useState(null);  
    const handle3DFreeCountChange = (count) => {
        setSelected3DFreeCount(count);
    };
    const render3DFreeCounts = () => {
        const counts = [1, 2, 3, 4, 5];
        return counts.map((count) => (
          <div
            key={count}
            className={`ticket-count ${selected3DFreeCount === count ? "selected" : ""}`}
            onClick={() => handle3DFreeCountChange(count)}
          >
            {count}
          </div>
        ));
    };

    // IMAX免費兌換券日新
    const [selectedIMAXFreeCount, setSelectedIMAXFreeCount] = useState(null);  
    const handleIMAXFreeCountChange = (count) => {
        setSelectedIMAXFreeCount(count);
    };
    const renderIMAXFreeCounts = () => {
        const counts = [1, 2, 3, 4, 5];
        return counts.map((count) => (
          <div
            key={count}
            className={`ticket-count ${selectedIMAXFreeCount === count ? "selected" : ""}`}
            onClick={() => handleIMAXFreeCountChange(count)}
          >
            {count}
          </div>
        ));
    };

    // IMAX免費兌換券威秀
    const [selectedIMAXFreeVSCCount, setSelectedIMAXFreeVSCCount] = useState(null);  
    const handleIMAXFreeVSCCountChange = (count) => {
        setSelectedIMAXFreeVSCCount(count);
    };
    const renderIMAXFreeVSCCounts = () => {
        const counts = [1, 2, 3, 4, 5];
        return counts.map((count) => (
          <div
            key={count}
            className={`ticket-count ${selectedIMAXFreeVSCCount === count ? "selected" : ""}`}
            onClick={() => handleIMAXFreeVSCCountChange(count)}
          >
            {count}
          </div>
        ));
    };

    // TITAN免費兌換券
    const [selectedTITANCount, setSelectedTITANCount] = useState(null);  
    const handleTITANCountChange = (count) => {
        setSelectedTITANCount(count);
    };
    const renderTITANCounts = () => {
        const counts = [1, 2, 3, 4, 5];
        return counts.map((count) => (
          <div
            key={count}
            className={`ticket-count ${selectedTITANCount === count ? "selected" : ""}`}
            onClick={() => handleTITANCountChange(count)}
          >
            {count}
          </div>
        ));
    };

    // 敬老票
    const [elderPrice, setElderPrice] = useState(170);
    const [selectedElderCount, setSelectedElderCount] = useState(null);  
    const handleElderCountChange = (count) => {
        setSelectedElderCount(count);
    };
    const renderElderCounts = () => {
        const counts = [1, 2, 3, 4, 5];
        return counts.map((count) => (
          <div
            key={count}
            className={`ticket-count ${selectedElderCount === count ? "selected" : ""}`}
            onClick={() => handleElderCountChange(count)}
          >
            {count}
          </div>
        ));
    };

    // 愛心票
    const [disPrice, setDisPrice] = useState(170);
    const [selectedDisCount, setSelectedDisCount] = useState(null);  
    const handleDisCountChange = (count) => {
        setSelectedDisCount(count);
    };
    const renderDisCounts = () => {
        const counts = [1, 2, 3, 4, 5];
        return counts.map((count) => (
          <div
            key={count}
            className={`ticket-count ${selectedDisCount === count ? "selected" : ""}`}
            onClick={() => handleDisCountChange(count)}
          >
            {count}
          </div>
        ));
    };

    useEffect(() => {
        cookies.set('selectedFreeCount',selectedFreeCount,{path:'/'});
        cookies.set('selected3DFreeCount',selected3DFreeCount,{path:'/'});
        cookies.set('selectedIMAXFreeCount',selectedIMAXFreeCount,{path:'/'});
        cookies.set('selectedIMAXFreeVSCCount',selectedIMAXFreeVSCCount,{path:'/'});
        cookies.set('selectedTITANCount',selectedTITANCount,{path:'/'});
        cookies.set('selectedElderCount',selectedElderCount,{path:'/'});
        cookies.set('selectedDisCount',selectedDisCount,{path:'/'});
    },[selectedFreeCount, selected3DFreeCount, selectedIMAXFreeCount, selectedIMAXFreeVSCCount, selectedTITANCount, selectedElderCount, selectedDisCount])

    const [search, setSearch] = useState('');
    const cookies=new Cookies();
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className="movieinfo">
                <div className="textBlock">
                    <div className="divItemDescription_CN">
                        <span id="movie01">(數位 國)蒼鷺與少年 (普遍級)</span>
                    </div>
                    <div className="divItemDescription_EN">
                        <span id="movie01">(DIG C)THE BOY AND THE HERON (G)</span>
                    </div>
                </div>
                <div className="textBlock">
                    <span id="cinema01" className="divItemDescription_CN">桃園統領威秀影城</span>
                    <div className="divItemDescription_EN">
                        <span id="cinema01">Vie Show Cinemas Taoyuan Tonlin</span>
                    </div>
                </div>
                <div className="textBlock">
                    <div className="divItemDescription_CN">
                        日期
                            <span id="time1130">2023-11-30</span>
                        , 場次
                            <span id="time11301710">17:10</span>
                            <span id="timeEnd"></span>
                    </div>
                    <div className="divItemDescription_EN">
                        <span id="timeEN">17:10, Thursday, Nov 30 2023</span>
                    </div>
                </div>

                {/* 上/下一頁按鈕的左邊空間 */}
                <div className="temp temp1"></div>
                <div className="temp temp2">
                    <div className="btn-group" role="group" aria-label="...">
                        <button type="button" class="btn btn-outline-primary" onClick={goBack}>上一頁</button>
                        <button type="button" class="btn btn-outline-primary">下一頁</button>
                    </div>
                </div>
            </div>

            <div className="below">
                {/* 團體優待票券 */}
                <div class="ticket-type">
                    <div class="temp">
                        <div class="divTicketsTypeDescription_CN">
                            <div data-toggle="modal" data-target=".bs-example-modal-sm">
                                團體優待票券
                            </div>
                        </div>
                        <div class="divTicketsTypeDescription_EN">
                            ORPORATE MOVIE MONEY
                        </div>
                    </div>
                    <div class="input-group input-group-lg">
                        <input class="form-control" type="text" maxlength="3" placeholder="請輸入前三碼英文字母"></input>
                        <span class="input-group-btn">
                            <input type="submit" class="btn btn-default"></input>
                        </span>
                    </div>
                </div>

                {/* 免費兌換券 */}
                <div class="ticket-type">
                    <div class="temp">
                        <div class="divTicketsTypeDescription_CN">
                            <div data-toggle="modal" data-target=".bs-example-modal-sm">
                                免費兌換券
                            </div>
                        </div>
                        <div class="divTicketsTypeDescription_EN">
                            READMISSION TICKET
                        </div>
                    </div>
                    <div className="ticket-counts-container">
                        <p className="price">NT$0</p>
                        {renderFreeCounts()}
                    </div>
                    
                </div>

                {/* 3D免費兌換券 */}
                <div class="ticket-type">
                    <div class="temp">
                        <div class="divTicketsTypeDescription_CN">
                            <div data-toggle="modal" data-target=".bs-example-modal-sm">
                                3D免費兌換券
                            </div>
                        </div>
                        <div class="divTicketsTypeDescription_EN">
                            3D Re-admission Ticket
                        </div>
                    </div>
                    <div className="ticket-counts-container">
                        <p className="price">NT$0</p>
                        {render3DFreeCounts()}
                    </div>
                </div>

                {/* IMAX免費兌換券日新 */}
                <div class="ticket-type">
                    <div class="temp">
                        <div class="divTicketsTypeDescription_CN">
                            <div data-toggle="modal" data-target=".bs-example-modal-sm">
                                IMAX免費兌換券日新
                            </div>
                        </div>
                        <div class="divTicketsTypeDescription_EN">
                            IMAX Re-admission Ticket
                        </div>
                    </div>
                    <div className="ticket-counts-container">
                        <p className="price">NT$0</p>
                        {renderIMAXFreeCounts()}
                    </div>
                </div>

                {/* IMAX免費兌換券威秀 */}
                <div class="ticket-type">
                    <div class="temp">
                        <div class="divTicketsTypeDescription_CN">
                            <div data-toggle="modal" data-target=".bs-example-modal-sm">
                                IMAX免費兌換券威秀
                            </div>
                        </div>
                        <div class="divTicketsTypeDescription_EN">
                            IMAXRe-admissionTicketVSC
                        </div>
                    </div>
                    <div className="ticket-counts-container">
                        <p className="price">NT$0</p>
                        {renderIMAXFreeVSCCounts()}
                    </div>
                </div>

                {/* TITAN免費兌換券 */}
                <div class="ticket-type">
                    <div class="temp">
                        <div class="divTicketsTypeDescription_CN">
                            <div data-toggle="modal" data-target=".bs-example-modal-sm">
                                TITAN免費兌換券
                            </div>
                        </div>
                        <div class="divTicketsTypeDescription_EN">
                            TITAN READMISSION
                        </div>
                    </div> 
                    <div className="ticket-counts-container">
                        <p className="price">NT$0</p>
                        {renderTITANCounts()}
                    </div>
                </div>

                {/* 敬老票 */}
                <div class="ticket-type">
                    <div class="temp">
                        <div class="divTicketsTypeDescription_CN">
                            <div data-toggle="modal" data-target=".bs-example-modal-sm">
                                敬老票
                            </div>
                        </div>
                        <div class="divTicketsTypeDescription_EN">
                            Elderly Ticket
                        </div>
                    </div>
                    <div className="ticket-counts-container">
                        <p className="price">NT${elderPrice}</p>
                        {renderElderCounts()}
                    </div>
                </div>

                {/* 愛心票 */}
                <div class="ticket-type">
                    <div class="temp">
                        <div class="divTicketsTypeDescription_CN">
                            <div data-toggle="modal" data-target=".bs-example-modal-sm">
                                愛心票
                            </div>
                        </div>
                        <div class="divTicketsTypeDescription_EN">
                            Disability Ticket
                        </div>
                        <div class="divTicketsTypeDescription_EN">
                            領有身心障礙相關手冊(證件) 即可購票，取票時需本人出示有效證件
                        </div>
                    </div>
                    <div className="ticket-counts-container">
                        <p className="price">NT${disPrice}</p>
                        {renderDisCounts()}
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default TicketTypeSpecial;