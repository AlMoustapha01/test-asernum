export type Beneficiary = {
  initials: string;
  color: string;
};

const BeneficiarySelector: React.FC<{ data: Beneficiary[] }> = ({
  data,
}: {
  data: Beneficiary[];
}) => {
  return (
    <div className="w-full">
    <p className="text-sm text-gray-500">Bénéficiare favoris</p>
    <div className="flex w-full space-x-2 mb-4">
      
      {data.map((beneficiary, index) => (
        <div
          key={index}
          className={`w-10 h-10 ${beneficiary.color} rounded-full flex items-center justify-center`}
        >
          {beneficiary.initials}
        </div>
      ))}
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-gray-500">+</span>
      </div>
    </div>
    </div>
  );
};

export default BeneficiarySelector;
