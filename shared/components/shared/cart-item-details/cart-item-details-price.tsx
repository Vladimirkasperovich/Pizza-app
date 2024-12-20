import {cn} from "@/shared/helpers/lib/utils";


interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value, className }) => {
  return <h2 className={cn('font-bold', className)}>{value} BYN</h2>;
};
