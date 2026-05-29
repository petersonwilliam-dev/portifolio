import { FaCode, FaTerminal, FaDatabase, FaBug, FaCogs } from 'react-icons/fa';
import { VscJson, VscSymbolMethod, VscBracketDot } from 'react-icons/vsc';
import { TbBinaryTree, TbApi } from 'react-icons/tb';
import styles from './CodeRain.module.css';

const CODE_ICONS = [
  <FaCode style={{ fontSize: '30px'}}/>,
  <FaTerminal style={{ fontSize: '30px'}}/>,
  <FaDatabase style={{ fontSize: '30px'}}/>,
  <FaBug style={{ fontSize: '30px'}}/>,
  <FaCogs style={{ fontSize: '30px'}}/>,
  <VscJson style={{ fontSize: '30px'}}/>,
  <VscSymbolMethod style={{ fontSize: '30px'}} />,
  <VscBracketDot style={{ fontSize: '30px'}}/>,
  <TbBinaryTree style={{ fontSize: '30px'}}/>,
  <TbApi style={{ fontSize: '30px'}}/>,
];

function CodeRain() {
  const generateRain = () => {
    return Array.from({ length: 20 }).map((_, index) => {
      const icon = CODE_ICONS[Math.floor(Math.random() * CODE_ICONS.length)];
      const delay = Math.random() * 3;
      const duration = 4 + Math.random() * 3;
      const left = Math.random() * 100;

      return (
        <div
          key={index}
          className={styles.codeChar}
          style={{
            top: '-30px',
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        >
          {icon}
        </div>
      );
    });
  };

  return <div className={styles.codeRain}>{generateRain()}</div>;
}

export default CodeRain;