import { useAccount } from "wagmi";

export default function useCurrentAccount() {
    const account = useAccount();

    return account;
}