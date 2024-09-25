import Image from "next/image";
import { StudentOrganization } from "@prisma/client";

interface StudentOrganizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  organization: StudentOrganization | null;
}

const StudentOrganizationModal = ({
  isOpen,
  onClose,
  organization,
}: StudentOrganizationModalProps) => {
  if (!isOpen || !organization) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#2C2B2B] rounded-[30px] p-4 sm:p-8 max-w-xl w-[70%] sm:w-full grid grid-cols-1 max-h-screen overflow-y-auto">
        <div className="flex justify-end">
          <button className="flex flex-row" onClick={onClose}>
            <div className="bg-[#E67119] text-white rounded-full h-10 w-10 flex items-center justify-center">
              <img
                src={"/icons/close.png"}
                className="h-10 w-10 object-contain invert"
                alt="close"
              />
            </div>
          </button>
        </div>
        <div className="font-gotham flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">{organization.name}</h2>
          <div className="bg-cover bg-no-repeat bg-[url('/images/dotsbg.png')] p-4 rounded-lg w-full">
            <h3 className="text-regular sm:text-xl font-bold mb-2 border-b-2 border-[#E67119]">
              Quem somos
            </h3>
            <p className="text-base text-white">{organization.description}</p>
            <div
              className="cursor-pointer flex justify-end"
              onClick={() => {
                if (organization.contactUrl) {
                  window.open(organization.contactUrl, "_blank");
                }
              }}
            >
              <div className="text-xl text-center w-fit items-center bg-[#E67119] rounded-[8px] p-2 py-1">
                Saiba mais
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentOrganizationModal;
