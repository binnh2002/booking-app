import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDay, faCar, faPeopleGroup, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
// css
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css"

const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    //option
    const [openOptions, setOpenOptions] = useState(false);

    const [option, setOpenOption] = useState({
        adult: 0,
        children: 0,
        room: 0,
    });

    const handlerOption = (name, operation) => {
        setOpenOption((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
            }
        })
    }
    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                    <> <h1 className="headerTitle">Find your kind of vacation rental</h1>
                        <p className="headerDesc">
                            Easy to book, hard to say goodbye to
                        </p>

                        <button className="headerBtn">Sign or login</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder="where are you going" className="headerSearchInput" />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && <DateRangePicker
                                    onChange={item => setDate([item.selection])}
                                    showSelectionPreview={false}
                                    moveRangeOnFirstSelection={false}
                                    months={1}
                                    ranges={date}
                                    direction="horizontal"
                                    className="date"
                                />};
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPeopleGroup} className="headerIcon" />
                                <span className="headerSearchText"
                                    onClick={() => setOpenOptions(!openOptions)}>{`${option.adult} adults  ${option.children} children  ${option.room} room`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>

                                        <div className="optionCounter">
                                            <button className="optionCounterBtn" onClick={() => handlerOption("adult", "d")}
                                                disabled={option.adult <= 1}>-
                                            </button>
                                            <span className="optionText">{`${option.adult}`}</span>
                                            <button className="optionCounterBtn" onClick={() => handlerOption("adult", "i")}>+
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterBtn" onClick={() => handlerOption("children", "d")}
                                                disabled={option.children <= 1}>-
                                            </button>
                                            <span className="optionText">{`${option.children}`}</span>
                                            <button className="optionCounterBtn"
                                                onClick={() => handlerOption("children", "i")}>+
                                            </button>
                                        </div>


                                    </div>
                                    <div className="optionItem">

                                        <span className="optionText">Room</span>

                                        <div className="optionCounter">
                                            <button className="optionCounterBtn" onClick={() => handlerOption("room", "d")}
                                                disabled={option.room <= 1}>-
                                            </button>
                                            <span className="optionText">{`${option.room}`}</span>
                                            <button className="optionCounterBtn" onClick={() => handlerOption("room", "i")}>+
                                            </button>
                                        </div>

                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn">
                                    Search
                                </button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Header