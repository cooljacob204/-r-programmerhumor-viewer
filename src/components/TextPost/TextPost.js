import React from 'react';
const ReactMarkdown = require('react-markdown')

const TextPost = (props) => <ReactMarkdown source={props.text} />

export default TextPost