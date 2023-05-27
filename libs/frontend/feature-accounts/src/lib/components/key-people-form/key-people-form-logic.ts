import { AccountKeyPeopleState, KeyPeopleState } from '@delia/frontend/core';

export const getDropdownOptions = (
  keyPeopleState: KeyPeopleState,
  accountKeyPeopleState: AccountKeyPeopleState
) => {
  if (
    keyPeopleState.kind === 'LoadedKeyPeopleState' &&
    accountKeyPeopleState.kind === 'LoadedAccountKeyPeopleState'
  ) {
    const deleteBindedKeyPeople = () => {
      return keyPeopleState.keyPeople.filter((keyPerson) => {
        return !accountKeyPeopleState.accountKeyPeople.keyPeople.find(
          (keyPersonAccount) => {
            return keyPerson.id === keyPersonAccount.id;
          }
        );
      });
    };

    const keyPeople = deleteBindedKeyPeople();

    return keyPeople.map((keyPeople) => {
      return { label: keyPeople.name, value: keyPeople };
    });
  }
  return [];
};

export const isValueInObjectsArrayProperty = (
  element: any,
  elementsArray: any[],
  fieldArrayElement: string
): boolean => {
  return !!elementsArray.find((arrayElement) => {
    return element === arrayElement[fieldArrayElement];
  });
};
