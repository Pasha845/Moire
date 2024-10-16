export default function numberFormat(value: number | bigint) {
  return new Intl.NumberFormat().format(value);
}
