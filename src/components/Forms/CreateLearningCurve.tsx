"use client";

// SignupForm.tsx
import React from "react";
import {
    CreateLearningCurveFormValues,
    createLearningCurveSchema,
} from "@/schema/createLearningCurve.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/user.slice";
import Link from "next/link";
import {
    type BaseError,
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { term_abi } from "@/abi/Term";

type CreateLearningCurveFormProps = {
    address: `0x${string}`;
    term: TermDetails;
};

const CreateLearningCurveForm: React.FC<CreateLearningCurveFormProps> = ({
    address,
    term,
}) => {
    const { data: hash, error, isPending, writeContract } = useWriteContract();

    const user = useSelector(selectUser);

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm<CreateLearningCurveFormValues>();

    const onSubmit = async (data: CreateLearningCurveFormValues) => {
        console.log("data", data);

        try {
            console.log("data", data);
            // Validate the form data using the login schema
            // If validation passes, submit the form
            const { curve } = data;
            writeContract({
                address: address,
                abi: term_abi,
                functionName: "addLearningCurves",
                args: [curve],
            });
        } catch (error: any) {
            // If validation fails, set the errors for each field
            console.log("error", error);
            if (error instanceof z.ZodError) {
                error.errors.forEach((err: any) => {
                    setError(err.path[0] as "curve", {
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
                    htmlFor="curve"
                    className="label block text-sm font-medium text-gray-200"
                >
                    Creating A Learning Curve For{" "}
                    <em>
                        <u>
                            <Link href={`/terms/${address}`}>{term.title}</Link>
                        </u>
                    </em>
                </label>
                <textarea
                    id="curve"
                    rows={7}
                    {...register("curve", {
                        value: "Describe your learning curve here",
                    })}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500 input"
                ></textarea>
                {errors.curve && (
                    <p className="text-red-500 text-xs">
                        {errors.curve.message}
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
                {isPending ? "Creating..." : `Create Learning Curve`}
            </button>
        </form>
    );
};

export default CreateLearningCurveForm;
