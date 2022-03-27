import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <div className="topMain">
            <div className="btn-group">
                {menuList.map((curElem) => {
                    return (
                        <>
                            <button onClick={() => filterItem(curElem)}>{curElem}</button>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default Navbar

