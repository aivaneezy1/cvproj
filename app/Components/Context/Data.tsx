"use client"
import React, {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";


interface DatiContextType {
    firstName: string;
    setFirstName: Dispatch<SetStateAction<string>>;
    lastName: string;
    setLastName: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    phoneNumber: string;
    setPhoneNumber: Dispatch<SetStateAction<string>>;
    address: string;
    setAddress: Dispatch<SetStateAction<string>>;
    postalCode: string;
    setPostalCode: Dispatch<SetStateAction<string>>;
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
    dateBirth: Date | undefined;
    setDateBirth: (date: string) => void;
}

// Utility function to throw errors outside the provider
const throwOutsideProviderError = (field: string) => {
    throw new Error(`set${field} is used outside the DataContextProvider`);
};

// Default context values with error-throwing setters
const defaultContextValue: DatiContextType = {
    firstName: "",
    setFirstName: () => throwOutsideProviderError("FirstName"),
    lastName: "",
    setLastName: () => throwOutsideProviderError("LastName"),
    email: "",
    setEmail: () => throwOutsideProviderError("Email"),
    phoneNumber: "",
    setPhoneNumber: () => throwOutsideProviderError("PhoneNumber"),
    address: "",
    setAddress: () => throwOutsideProviderError("Address"),
    postalCode: "",
    setPostalCode: () => throwOutsideProviderError("PostalCode"),
    city: "",
    setCity: () => throwOutsideProviderError("City"),
    dateBirth: undefined,
    setDateBirth: () => throwOutsideProviderError("DateBirth")
};

export const DataContext = createContext<DatiContextType>(defaultContextValue);

const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [dateBirth, setDateBirth] = useState<Date | undefined>(undefined);

    // Custom handler to update date from a string input
    const handleSetDateBirth = (date: string) => {
        setDateBirth(date ? new Date(date) : undefined);
    };

    return (
        <DataContext.Provider
            value={{
                firstName,
                setFirstName,
                lastName,
                setLastName,
                email,
                setEmail,
                phoneNumber,
                setPhoneNumber,
                address,
                setAddress,
                postalCode,
                setPostalCode,
                city,
                setCity,
                dateBirth,
                setDateBirth: handleSetDateBirth
            }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
