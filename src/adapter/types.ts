import { AiTool } from '../ai';
import { ChainId, SignTransactionProps, TransactionReturn } from '../blockchain';
import { PublicClient } from 'viem';

export interface FunctionReturn {
    readonly success: boolean;
    readonly data: string;
}

export interface FunctionOptions {
    readonly getProvider: (chainId: ChainId) => PublicClient;
    readonly signTransactions: (props: SignTransactionProps) => Promise<TransactionReturn>;
    readonly notify: (message: string) => Promise<any>;
}

export interface AdapterExport {
    readonly tools: AiTool[];
    readonly functions: Record<string, (args: any, options: FunctionOptions) => PromiseLike<FunctionReturn>>;
    readonly description: string;
}
