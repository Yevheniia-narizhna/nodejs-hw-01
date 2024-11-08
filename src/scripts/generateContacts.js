import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newArrayCont = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...contacts, newArrayCont];
    await writeContacts(updatedContacts);
  } catch (error) {
    throw new Error('error', error);
  }
};

generateContacts(5);
