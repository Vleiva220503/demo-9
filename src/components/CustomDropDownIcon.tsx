// CustomDropDownIcon.tsx
interface CustomDropDownIconProps {
    rotate?: boolean;
  }
  
  const CustomDropDownIcon = ({ rotate = false }: CustomDropDownIconProps) => (
    <div style={{ transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8.3751L0 2.3751L1.4 0.975098L6 5.5751L10.6 0.975098L12 2.3751L6 8.3751Z" fill="#FDFDFD"/>
      </svg>
    </div>
  );
  
  export default CustomDropDownIcon;
  