/* Autogenerated file. Do not edit manually. */

// @ts-ignore
import {defineComponent, Type as RecsType, World} from "@dojoengine/recs";

export type ContractComponents = Awaited<
    ReturnType<typeof defineContractComponents>
>;

export function defineContractComponents(world: World) {
    return {
        App: (() => {
            return defineComponent(
                world,
                {
                    system: RecsType.BigInt,
                    name: RecsType.BigInt,
                    manifest: RecsType.BigInt,
                    icon: RecsType.BigInt,
                    action: RecsType.BigInt
                },
                {
                    metadata: {
                        name: "App",
                        types: ["contractaddress", "felt252", "felt252", "felt252", "felt252"],
                        customTypes: [],
                    },
                }
            );
        })(),
        AppName: (() => {
            return defineComponent(
                world,
                {name: RecsType.BigInt, system: RecsType.BigInt},
                {
                    metadata: {
                        name: "AppName",
                        types: ["felt252", "contractaddress"],
                        customTypes: [],
                    },
                }
            );
        })(),
        AppUser: (() => {
            return defineComponent(
                world,
                {system: RecsType.BigInt, player: RecsType.BigInt, action: RecsType.BigInt},
                {
                    metadata: {
                        name: "AppUser",
                        types: ["contractaddress", "contractaddress", "felt252"],
                        customTypes: [],
                    },
                }
            );
        })(),
        CoreActionsAddress: (() => {
            return defineComponent(
                world,
                {key: RecsType.BigInt, value: RecsType.BigInt},
                {
                    metadata: {
                        name: "CoreActionsAddress",
                        types: ["felt252", "contractaddress"],
                        customTypes: [],
                    },
                }
            );
        })(),
        Instruction: (() => {
            return defineComponent(
                world,
                {system: RecsType.BigInt, selector: RecsType.BigInt, instruction: RecsType.BigInt},
                {
                    metadata: {
                        name: "Instruction",
                        types: ["contractaddress", "felt252", "felt252"],
                        customTypes: [],
                    },
                }
            );
        })(),
    };
}
