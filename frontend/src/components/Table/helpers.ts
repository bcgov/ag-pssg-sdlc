import { CellProps } from 'react-table';
import { formatMoney, formatNumber, prettyFormatDate } from 'utils';

/**
 * These helper methods below provide ways to render common values on a Table cell;
 *  - dates
 *  - money
 *  - percentages
 */

export const renderDate = <T extends object>({ cell: { value } }: CellProps<T, string>) =>
  prettyFormatDate(value);

export const renderMoney = <T extends object>({ cell: { value } }: CellProps<T, string>) =>
  formatMoney(value as any);

export const renderPercentage = <T extends object>({ cell: { value } }: CellProps<T, string>) =>
  `${formatNumber(value as any, 0, 2)}%`;
