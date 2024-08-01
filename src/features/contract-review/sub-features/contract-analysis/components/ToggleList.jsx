import {useEffect, useState} from 'react';
import '../styles/ToggleList.css';
import PropTypes from "prop-types";

const ToggleList = (
    {
        titleString,
        titleComponent,
        children,
        isOpen: externalIsOpen,
        onToggle,
        childIndentation,
        headerStyle,
        addBottomMargin,
    }
) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(externalIsOpen);
    }, [externalIsOpen]);

    const toggleOpen = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };

    function renderTitle() {
        if (titleComponent) {
            return titleComponent;
        }

        return <h3 className="toggle-list-title">{titleString}</h3>;
    }

    function renderChildren() {
        if (childIndentation) {
            return (
                <div className="toggle-list-content" style={{marginLeft: childIndentation}}>
                    {children}
                </div>
            );
        }

        return (
            <div className="toggle-list-content">
                {children}
            </div>
        );
    }

    return (
        <div>
            <div className="toggle-list">
                <div className="toggle-list-header" style={headerStyle} onClick={toggleOpen}>
                    <div
                        className={`toggle-list-arrow ${isOpen ? 'toggle-list-arrow-down' : ''}`}>&#9656;</div>
                    {renderTitle()}
                </div>
                {isOpen && renderChildren()}
            </div>
            {addBottomMargin && <div style={{height: '16px'}}/>}
        </div>
    );
};

ToggleList.propTypes = {
    titleString: PropTypes.string,
    titleComponent: PropTypes.node,
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func,
    childIndentation: PropTypes.string,
    headerStyle: PropTypes.object,
    addBottomMargin: PropTypes.bool,
};

ToggleList.defaultProps = {
    addBottomMargin: true,
}

export default ToggleList;