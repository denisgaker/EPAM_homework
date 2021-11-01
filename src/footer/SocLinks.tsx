import * as React from 'react';
import Datats from '../Data';

const FooterData = Datats.socialNetworkLinks;

const SocLinks: React.FC = () => (
    <div className="soc">
      {FooterData.map((fd) => (
        <a href={fd.link} target={fd.target} title={fd.desc} className={fd.name} key={fd.key}></a>
      ))}
    </div>
);

export default SocLinks;
