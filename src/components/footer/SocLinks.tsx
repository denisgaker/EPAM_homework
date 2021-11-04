import * as React from 'react';
import datats from '../../Data';

const footerData = datats.socialNetworkLinks;

const SocLinks: React.FC = () => (
    <div className="soc">
      {footerData.map((fd) => (
        <a href={fd.link} target={fd.target} title={fd.desc} className={fd.name} key={fd.key}></a>
      ))}
    </div>
);

export default SocLinks;
