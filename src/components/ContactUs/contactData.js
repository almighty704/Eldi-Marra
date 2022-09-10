import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const contactData = [
  {
    id: uuidv4(),
    icon: <AiOutlineMail />,
    heading: 'Email Address',
    text: 'Sent mail asap anytime',
    item1: 'eldimarra99@gmail.com',
    // item2: 'eldimarra99@gmail.com',
  },

  {
    id: uuidv4(),
    icon: <AiOutlinePhone />,
    heading: 'Phone Number',
    text: 'call us asap anytime',
    item1: '+355 67 671 1147',
  },

  {
    id: uuidv4(),
    icon: <FaMapMarkerAlt />,
    heading: 'Office Address',
    text: 'Sent mail asap anytime',
    item1: 'Tirana , Albania',
  },
];

export default contactData;
