import React from "react";
import cn from 'classnames';
import * as PropTypes from "prop-types";


class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLeft: false,
            activeRight: false
        };
    };

    handleClick = (side) => () => {
        if (side === "left") {
            this.setState(
                {
                    activeLeft: true,
                    activeRight: false
                }
            )
        }

        if (side === "right") {
            this.setState(
                {
                    activeLeft: false,
                    activeRight: true
                }
            )
        }
    };

    handleClickLeft = this.handleClick("left");
    handleClickRight = this.handleClick("right");

    render() {
        const classesLeftButton = cn("btn", "btn-secondary",{
            left: true,
            active: this.state.activeLeft
        });
        const classesRightButton = cn("btn", "btn-secondary",{
            right: true,
            active: this.state.activeRight
        });
        const classesBtnGroup = cn("btn-group");

        const alertAttrs = {
            role: "group",
            type: "button"
        };

        return (
            <div className={classesBtnGroup} role={alertAttrs.role}>
                <button type={alertAttrs.type} className={classesLeftButton} onClick={this.handleClickLeft}>Left</button>
                <button type={alertAttrs.type} className={classesRightButton} onClick={this.handleClickRight}>Right</button>
            </div>
        );
    };
}

BtnGroup.propTypes = {
    props: PropTypes.object
}

export default BtnGroup;