import {
  StyledAccountsButtons,
  StyledAccountsForm,
  StyledItemsForm,
  StyledStar,
} from './accounts-form.styles';
import { Controller, useForm, FieldValues } from 'react-hook-form';
import { Button, Dropdown, GenericInput, TextArea } from '@delia/ui-shared';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Account,
  AccountsPloc,
  AccountsState,
  BuOwnerPloc,
  BuOwnersState,
  PortfolioPloc,
  PortfoliosState,
} from '@delia/frontend/core';
import { useEffect, useState } from 'react';
import {
  findAccount,
  getSelectedBuOwner,
  getSelectedPortfolio,
  handleAccountCreate,
  handleAccountUpdate,
} from './accounts-form-logic';

type Mode = 'create' | 'edit';
export interface AccountsFormProps {
  handleSave?: () => void;
  handleCancel?: () => void;
  formMode: Mode;
  buOwnerPloc: BuOwnerPloc;
  buOwnersState: BuOwnersState;
  accountsPloc: AccountsPloc;
  accountsState: AccountsState;
  portfoliosPloc: PortfolioPloc;
  portfoliosState: PortfoliosState;
}

export function AccountsForm({
  handleSave,
  handleCancel,
  formMode,
  buOwnerPloc,
  buOwnersState,
  accountsPloc,
  accountsState,
  portfoliosPloc,
  portfoliosState,
}: AccountsFormProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [accountError, setAccountError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Name must not be empty');
  const [isTyped, setIsTyped] = useState(false);
  const { accountId } = useParams();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      name: undefined,
      buOwner: undefined,
      portfolio: undefined,
      salesforceLink: undefined,
      pcsLink: undefined,
      strategy: undefined,
    },
  });

  useEffect(() => {
    const getBuOwners = async () => {
      await buOwnerPloc.getAll();
    };
    const getPortfolios = async () => {
      await portfoliosPloc.getAll();
    };
    getBuOwners();
    getPortfolios();
  }, []);

  const setDefaultFormValues = (account: Account) => {
    reset({
      name: account.name,
      buOwner: account.buOwner?.name && {
        label: account.buOwner?.name,
        value: account.buOwner?.name,
      },
      portfolio: account.portfolio?.name && {
        label: account.portfolio?.name,
        value: account.portfolio?.name,
      },
      pcsLink: account.pcsLink,
      salesforceLink: account.salesforceLink,
      strategy: account.strategy,
    });
  };

  useEffect(() => {
    switch (accountsState.kind) {
      case 'LoadedAccountState':
        {
          if (formMode == 'edit') {
            setIsTyped(true);
            setDefaultFormValues(accountsState.account);
          } else {
            setErrorMessage('This name is already at use');
            setAccountError(true);
          }
        }
        break;
      case 'ErrorAccountState':
        break;
      case 'CreatedAccountState':
        navigate(pathname.replace('create/', 'edit/'));
        setDefaultFormValues(accountsState.account);
        break;
      case 'SettedAccountState': {
        setIsTyped(true);
        setDefaultFormValues(accountsState.account);
        break;
      }
      default:
        setAccountError(false);
    }
  }, [accountsState]);

  const handleAccountNameInputChange = (event: any) => {
    setIsTyped(true);
    const value = event.target.value;
    if (!value && isTyped) {
      setErrorMessage('Name must not be empty');
      setAccountError(true);
    } else {
      findAccount(accountsPloc, value);
    }
  };

  const onSubmit = (data: any) => {
    const { name, salesforceLink, pcsLink, buOwner, portfolio, strategy } =
      data;

    const buOwnerResponse = getSelectedBuOwner(buOwnersState, buOwner);
    const portfolioResponse = getSelectedPortfolio(portfoliosState, portfolio);

    if (accountId && buOwnerResponse && portfolioResponse) {
      const account = {
        name,
        portfolio: portfolioResponse,
        pcsLink,
        strategy,
        salesforceLink,
        buOwner: buOwnerResponse,
      };
      formMode === 'create'
        ? handleAccountCreate(accountsPloc, { id: accountId, ...account })
        : handleAccountUpdate(accountsPloc, accountId, account);
    }
  };

  return (
    <StyledAccountsForm onSubmit={handleSubmit(onSubmit)}>
      <StyledItemsForm>
        <label>
          Name<StyledStar>*</StyledStar>
          <Controller
            control={control}
            {...register('name', {
              required: true,
              onChange: handleAccountNameInputChange,
            })}
            render={({ field }) => (
              <GenericInput
                {...field}
                placeholder="Type account name"
                error={accountError}
                errorMessage={errorMessage}
                disabled={formMode === 'edit'}
              />
            )}
          />
        </label>
        <label>
          BU Owner<StyledStar>*</StyledStar>
          <Controller
            control={control}
            {...register('buOwner', {
              required: true,
            })}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={
                  buOwnersState.kind === 'LoadedBuOwnersState'
                    ? buOwnersState.buOwners.map((buOwner) => {
                        return { label: buOwner.name };
                      })
                    : []
                }
                placeholder="Select the Business Unit"
              />
            )}
          />
        </label>
        <label>
          Portfolio<StyledStar>*</StyledStar>
          <Controller
            control={control}
            {...register('portfolio', {
              required: true,
            })}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={
                  portfoliosState.kind === 'LoadedPortfoliosState'
                    ? portfoliosState.portfolios.map((portfolio) => {
                        return { label: portfolio.name };
                      })
                    : []
                }
                placeholder="Select Portfolio Name"
              />
            )}
          />
        </label>
      </StyledItemsForm>
      <StyledItemsForm>
        <label>
          Salesforce Link
          <Controller
            control={control}
            {...register('salesforceLink', {
              pattern:
                //eslint-disable-next-line
                /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
            })}
            render={({ field, fieldState: { invalid } }) => (
              <GenericInput
                {...field}
                placeholder="Type Salesforce Link"
                error={invalid}
                errorMessage={'Value must be a link'}
              />
            )}
          />
        </label>
        <label>
          PCS Link
          <Controller
            control={control}
            {...register('pcsLink', {
              pattern:
                //eslint-disable-next-line
                /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
            })}
            render={({ field, fieldState: { invalid } }) => (
              <GenericInput
                {...field}
                placeholder="Type PCS Link"
                error={invalid}
                errorMessage={'Value must be a link'}
              />
            )}
          />
        </label>
      </StyledItemsForm>
      <StyledItemsForm>
        <label>
          What's the LATAM strategy/objectives with this account?{' '}
          <Controller
            name="strategy"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum nibh quis eros fermentum semper."
              />
            )}
          />
        </label>

        <StyledAccountsButtons>
          <Button
            text="Cancel"
            variant="secondary"
            disabled={!isDirty}
            onClick={handleCancel}
          />
          <Button
            text={formMode === 'create' ? 'Create' : 'Edit'}
            variant="primary"
            type="submit"
            onClick={handleSave}
            disabled={accountError || !isValid || !isTyped}
          />
        </StyledAccountsButtons>
      </StyledItemsForm>
    </StyledAccountsForm>
  );
}

export default AccountsForm;
