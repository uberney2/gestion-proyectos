import { AccountKeyPeoplePloc, KeyPeoplePloc } from '@delia/frontend/core';

export const bindKeyPeopleToAccount = async (
  accountKeyPeoplePloc: AccountKeyPeoplePloc,
  accountId: string,
  keyPersonId: string,
  notes: string
) => {
  await accountKeyPeoplePloc.bind(accountId, keyPersonId, {
    notes,
  });
};

export const createKeyPerson = async (
  keyPeoplePloc: KeyPeoplePloc,
  keyPersonId: string,
  keyPersonName: string,
  keyPersonEmail: string,
  keyPersonRole: string
) => {
  await keyPeoplePloc.create({
    id: keyPersonId,
    name: keyPersonName,
    email: keyPersonEmail,
    role: keyPersonRole,
  });
};
