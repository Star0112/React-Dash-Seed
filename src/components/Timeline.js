import React from "react";
import classNames from "classnames";

const defaultProps = {
  tag: "ul"
};

const Timeline = ({ children, className, tag: Tag, ...rest }) => (
  <Tag className={classNames("timeline", className)} {...rest}>
    {children}
  </Tag>
);

Timeline.defaultProps = defaultProps;

export default Timeline;
