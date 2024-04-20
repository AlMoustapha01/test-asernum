import {useLocale, useTranslations} from 'next-intl';
import {locales} from '@/config';
import LocaleSwitcherSelect from '../LocaleSwitcherSelect';
import { SelectItem } from '@nextui-org/react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}