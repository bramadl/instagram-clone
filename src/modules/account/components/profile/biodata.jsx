import ReactMarkdown from 'react-markdown'

function Biodata(props) {
  const { username, biodata, website } = props;
  
  return (
    <div>
      <h2 className="font-bold text-sm">{username}</h2>
      <div className="font-light text-sm leading-tight line-clamp-2">
        <ReactMarkdown children={biodata} className="markdown-domain" linkTarget="_blank" />
      </div>
      {website && <a className="font-light text-sm text-[#004C8B]" href={website}>{website}</a>}
    </div>
  );
}

export default Biodata;
