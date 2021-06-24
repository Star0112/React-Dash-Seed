import React from "react";
import classNames from "classnames";

const defaultProps = {
  tag: "li"
};

const TimelineItem = ({ children, className, tag: Tag, ...rest }) => (
  <Tag className={classNames("timeline-item", className)} {...rest}>
    {children}
  </Tag>
);

TimelineItem.defaultProps = defaultProps;

export default TimelineItem;
