"use client";

// SignupForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import {
    CreateTermFormValues,
    createTermSchema,
} from "@/schema/createTerm.schema";
import { z } from "zod";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/user.slice";
import { TermType } from "@/types/Term.type";
import { TermDetails } from "@/app/terms/[address]/page";
import Link from "next/link";
import {
    type BaseError,
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { learneaContractAddress } from "@/lib/constant";
import { learnea_v3 } from "@/abi/Learnea/v3";

type CreateTermFormProps = {
    term: TermDetails;
    address: `0x${string}`;
};

const CreateTermForm: React.FC<CreateTermFormProps> = ({ term, address }) => {
    const { data: hash, error, isPending, writeContract } = useWriteContract();

    const user = useSelector(selectUser);

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm<CreateTermFormValues>();

    const onSubmit = async (data: CreateTermFormValues) => {
        console.log("data", data);

        try {
            console.log("data", data);
            // Validate the form data using the login schema
            await createTermSchema.parseAsync(data);
            // If validation passes, submit the form
            const { title, details, termType, derivedFrom } = data;
            writeContract({
                address: learneaContractAddress.v2,
                abi: learnea_v3,
                functionName: "createTerm",
                args: [title, details, Number(termType), derivedFrom],
            });
        } catch (error: any) {
            // If validation fails, set the errors for each field
            console.log("error", error);
            if (error instanceof z.ZodError) {
                error.errors.forEach((err: any) => {
                    setError(err.path[0] as "title" | "details", {
                        type: "manual",
                        message: err.message,
                    });
                });
            }
        }
    };

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        });

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <form
            className="w-full max-w-sm mx-auto form-wrapper rounded-xl"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="mb-6">
                <label
                    htmlFor="deriivedFrom"
                    className="label block text-sm font-medium text-gray-200"
                >
                    Deriving From{" "}
                    <em>
                        <u>
                            <Link href={`/terms/${address}`}>{term.title}</Link>
                        </u>
                    </em>
                </label>
                <input
                    type="text"
                    id="deriivedFrom"
                    {...register("derivedFrom", {
                        value: address,
                    })}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500 input"
                />
                {errors.derivedFrom && (
                    <p className="text-red-500 text-xs">
                        {errors.derivedFrom.message}
                    </p>
                )}
            </div>
            <div className="mb-6">
                <label
                    htmlFor="title"
                    className="label block text-sm font-medium text-gray-200"
                >
                    Term Name
                </label>
                <input
                    type="text"
                    id="title"
                    {...register("title")}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500 input"
                />
                {errors.title && (
                    <p className="text-red-500 text-xs">
                        {errors.title.message}
                    </p>
                )}
            </div>

            <div className="mb-6">
                <label
                    htmlFor="termType"
                    className="label block text-sm font-medium text-gray-200"
                >
                    Term Types
                </label>
                <select
                    id="termType"
                    {...register("termType")}
                    defaultValue={2}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500 input"
                >
                    <option value={TermType.CO}>Co-Term / Similar Term</option>
                    <option value={TermType.MACRO}>Parent Term</option>
                    <option value={TermType.MICRO}>Child Term</option>
                    <option value={TermType.PERSPECTIVE}>
                        Perspective / From another Perspective
                    </option>
                    <option value={TermType.PHILOSOPHY}>
                        Philosophy Term / New Learning
                    </option>
                    <option value={TermType.SCIENTIFIC}>Scientific Term</option>
                    <option value={TermType.STANDALONE}>Standalone Term</option>
                </select>
                {errors.termType && (
                    <p className="text-red-500 text-xs">
                        {errors.termType.message}
                    </p>
                )}
            </div>

            <div className="mb-6">
                <label
                    htmlFor="details"
                    className="label block text-sm font-medium text-gray-200"
                >
                    Term Details
                </label>
                <textarea
                    defaultValue={`Write description`}
                    id="details"
                    rows={7}
                    {...register("details")}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500 input"
                ></textarea>
                {errors.details && (
                    <p className="text-red-500 text-xs">
                        {errors.details.message}
                    </p>
                )}
            </div>
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
            {error && (
                <div>
                    Error: {(error as BaseError).shortMessage || error.message}
                </div>
            )}
            <button
                type="submit"
                disabled={isPending}
                onClick={() => handleSubmit(onSubmit)()}
                className="w-full py-2 px-4 rounded-md text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 submit"
            >
                {isPending ? "Creating..." : `Create ${watch("title")}`}
            </button>
        </form>
    );
};

export default CreateTermForm;
