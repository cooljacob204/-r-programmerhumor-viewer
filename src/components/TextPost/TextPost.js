import React from 'react';
const ReactMarkdown = require('react-markdown')

const TextPost = (props) => <div className={props.className}><ReactMarkdown source={props.text} /></div>

export default TextPost