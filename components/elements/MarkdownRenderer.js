import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ markdownContent }) => {
  return (
    <div className="markdown-container">
      <ReactMarkdown source={markdownContent} />
      <style jsx>{`
        .markdown-container {
          /* Your custom styles go here */
          font-family: Arial, sans-serif;
          color: #333;
          /* Add any other custom styles you need */
        }

        /* Define custom styles for specific elements if needed */
        h1 {
          font-size: 24px;
        }
        h2 {
          font-size: 24px;
          font-weight:600;
        }
        p {
          font-size: 18px;
        }

        /* Add more custom styles for other elements as necessary */
      `}</style>
    </div>
  );
};

export default MarkdownRenderer;
