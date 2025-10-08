'use client';

import React from 'react';
import { WhiteBlock } from '@/shared/components/shared/white-block';
import { FormTextarea } from '@/shared/components/shared/form/form-textarea';
import { AddressInput } from '@/shared/components/shared/address-input';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorText } from '@/shared/components/shared/error-text';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        {/*<Input name="firstName" className="text-base" placeholder="Введите адрес" />*/}

        <Controller
          name="address"
          control={control}
          rules={{ required: 'Адрес обязателен' }} // пример валидации
          render={({ field, fieldState }) => (
            <>
              <AddressInput
                value={field.value} // текущее значение поля
                onChange={(value) => field.onChange(value)} // уведомляем RHF об изменении
              />
              {fieldState.error && <ErrorText text={fieldState.error.message} />}
            </>
          )}
        />

        <FormTextarea
          name="comment"
          rows={5}
          className="text-base"
          placeholder="Комментарий к заказу"
        />
      </div>
    </WhiteBlock>
  );
};
