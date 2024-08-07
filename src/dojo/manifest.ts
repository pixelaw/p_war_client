// abi's for dojo 0.6.1.alpha-4
// models for pixelaw 0.2.0

export default function (worldAddress: string) {
    return {
        contracts: [],
        models: [
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'game_id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'contract',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'is_allowed',
                        type: 'bool',
                        key: false,
                    },
                ],
                class_hash: '0x1c0f1c7398ad721741911143732944a6ebf22d283820ff6d157c9306d2aa47a',
                original_class_hash:
                    '0x1c0f1c7398ad721741911143732944a6ebf22d283820ff6d157c9306d2aa47a',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'allowed_appImpl',
                        interface_name: 'p_war::models::allowed_app::Iallowed_app',
                    },
                    {
                        type: 'enum',
                        name: 'core::bool',
                        variants: [
                            {
                                name: 'False',
                                type: '()',
                            },
                            {
                                name: 'True',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::allowed_app::AllowedApp',
                        members: [
                            {
                                name: 'game_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'contract',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'is_allowed',
                                type: 'core::bool',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::allowed_app::Iallowed_app',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::allowed_app::AllowedApp',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::allowed_app::allowed_app::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::allowed_app::allowed_app',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'game_id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'color',
                        type: 'u32',
                        key: true,
                    },
                    {
                        name: 'is_allowed',
                        type: 'bool',
                        key: false,
                    },
                ],
                class_hash: '0x7205d86654030ef9bafb6f3e9f59fd92bb93f7e2d89a0b9a2aaecad65480fd1',
                original_class_hash:
                    '0x7205d86654030ef9bafb6f3e9f59fd92bb93f7e2d89a0b9a2aaecad65480fd1',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'allowed_colorImpl',
                        interface_name: 'p_war::models::allowed_color::Iallowed_color',
                    },
                    {
                        type: 'enum',
                        name: 'core::bool',
                        variants: [
                            {
                                name: 'False',
                                type: '()',
                            },
                            {
                                name: 'True',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::allowed_color::AllowedColor',
                        members: [
                            {
                                name: 'game_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'color',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'is_allowed',
                                type: 'core::bool',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::allowed_color::Iallowed_color',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::allowed_color::AllowedColor',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::allowed_color::allowed_color::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::allowed_color::allowed_color',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'game_id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'length',
                        type: 'usize',
                        key: false,
                    },
                ],
                class_hash: '0x636157ea757eee10005bf635700ba7fef4bb4506c753ad544815ab17307eab6',
                original_class_hash:
                    '0x636157ea757eee10005bf635700ba7fef4bb4506c753ad544815ab17307eab6',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'game_paletteImpl',
                        interface_name: 'p_war::models::allowed_color::Igame_palette',
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::allowed_color::GamePalette',
                        members: [
                            {
                                name: 'game_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'length',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::allowed_color::Igame_palette',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::allowed_color::GamePalette',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::allowed_color::game_palette::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::allowed_color::game_palette',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'game_id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'color',
                        type: 'u32',
                        key: true,
                    },
                    {
                        name: 'value',
                        type: 'bool',
                        key: false,
                    },
                ],
                class_hash: '0x2036ca230cd4fb9146819da151ccd57292892195eff43dc4931b7d9703b0bc',
                original_class_hash:
                    '0x2036ca230cd4fb9146819da151ccd57292892195eff43dc4931b7d9703b0bc',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'in_paletteImpl',
                        interface_name: 'p_war::models::allowed_color::Iin_palette',
                    },
                    {
                        type: 'enum',
                        name: 'core::bool',
                        variants: [
                            {
                                name: 'False',
                                type: '()',
                            },
                            {
                                name: 'True',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::allowed_color::InPalette',
                        members: [
                            {
                                name: 'game_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'color',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'value',
                                type: 'core::bool',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::allowed_color::Iin_palette',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::allowed_color::InPalette',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::allowed_color::in_palette::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::allowed_color::in_palette',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'game_id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'idx',
                        type: 'u32',
                        key: true,
                    },
                    {
                        name: 'color',
                        type: 'u32',
                        key: false,
                    },
                ],
                class_hash: '0x5dd036d17a36ae5166b87113c89bb1e37c59ca6edbfdc35f22102ab45cfadbe',
                original_class_hash:
                    '0x5dd036d17a36ae5166b87113c89bb1e37c59ca6edbfdc35f22102ab45cfadbe',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'palette_colorsImpl',
                        interface_name: 'p_war::models::allowed_color::Ipalette_colors',
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::allowed_color::PaletteColors',
                        members: [
                            {
                                name: 'game_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'idx',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'color',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::allowed_color::Ipalette_colors',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::allowed_color::PaletteColors',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::allowed_color::palette_colors::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::allowed_color::palette_colors',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'origin',
                        type: 'Position',
                        key: false,
                    },
                    {
                        name: 'width',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'height',
                        type: 'u32',
                        key: false,
                    },
                ],
                class_hash: '0x2429cdd90cc9d51a903b0c8bbd3e19271f823937aab60f5b444200635b04044',
                original_class_hash:
                    '0x2429cdd90cc9d51a903b0c8bbd3e19271f823937aab60f5b444200635b04044',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'boardImpl',
                        interface_name: 'p_war::models::board::Iboard',
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::board::Position',
                        members: [
                            {
                                name: 'x',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'y',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::board::Board',
                        members: [
                            {
                                name: 'id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'origin',
                                type: 'p_war::models::board::Position',
                            },
                            {
                                name: 'width',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'height',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::board::Iboard',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::board::Board',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::board::board::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::board::board',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'x',
                        type: 'u32',
                        key: true,
                    },
                    {
                        name: 'y',
                        type: 'u32',
                        key: true,
                    },
                    {
                        name: 'value',
                        type: 'usize',
                        key: false,
                    },
                ],
                class_hash: '0x58af23d54aad773a73bd22bbcb7e6d29f0b49643e8931f48df837c931b8a218',
                original_class_hash:
                    '0x58af23d54aad773a73bd22bbcb7e6d29f0b49643e8931f48df837c931b8a218',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'game_idImpl',
                        interface_name: 'p_war::models::board::Igame_id',
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::board::GameId',
                        members: [
                            {
                                name: 'x',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'y',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'value',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::board::Igame_id',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::board::GameId',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::board::game_id::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::board::game_id',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'position',
                        type: 'Position',
                        key: true,
                    },
                    {
                        name: 'owner',
                        type: 'ContractAddress',
                        key: false,
                    },
                ],
                class_hash: '0x3a759caf62afb2fd084ecc63d77ec528c50774246b658c9ac485915707676af',
                original_class_hash:
                    '0x3a759caf62afb2fd084ecc63d77ec528c50774246b658c9ac485915707676af',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'p_war_pixelImpl',
                        interface_name: 'p_war::models::board::Ip_war_pixel',
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::board::Position',
                        members: [
                            {
                                name: 'x',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'y',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::board::PWarPixel',
                        members: [
                            {
                                name: 'position',
                                type: 'p_war::models::board::Position',
                            },
                            {
                                name: 'owner',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::board::Ip_war_pixel',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::board::PWarPixel',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::board::p_war_pixel::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::board::p_war_pixel',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'start',
                        type: 'u64',
                        key: false,
                    },
                    {
                        name: 'end',
                        type: 'u64',
                        key: false,
                    },
                    {
                        name: 'proposal_idx',
                        type: 'usize',
                        key: false,
                    },
                    {
                        name: 'base_cost',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'const_val',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'coeff_own_pixels',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'coeff_commits',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'winner_config',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'winner',
                        type: 'ContractAddress',
                        key: false,
                    },
                ],
                class_hash: '0x799abaa422dec2890d31160ad8b945d18bbd316c2064f2f8cede6b433609ee1',
                original_class_hash:
                    '0x799abaa422dec2890d31160ad8b945d18bbd316c2064f2f8cede6b433609ee1',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'gameImpl',
                        interface_name: 'p_war::models::game::Igame',
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::game::Game',
                        members: [
                            {
                                name: 'id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'start',
                                type: 'core::integer::u64',
                            },
                            {
                                name: 'end',
                                type: 'core::integer::u64',
                            },
                            {
                                name: 'proposal_idx',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'base_cost',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'const_val',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'coeff_own_pixels',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'coeff_commits',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'winner_config',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'winner',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::game::Igame',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::game::Game',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::game::game::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::game::game',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'address',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'max_px',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'num_owns',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'num_commit',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'current_px',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'last_date',
                        type: 'u64',
                        key: false,
                    },
                    {
                        name: 'is_banned',
                        type: 'bool',
                        key: false,
                    },
                ],
                class_hash: '0x3d7e89f1f0ad7eee6af444dc7d9e4443d17a73d3f0f6a569bf0d776eca36d47',
                original_class_hash:
                    '0x3d7e89f1f0ad7eee6af444dc7d9e4443d17a73d3f0f6a569bf0d776eca36d47',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'playerImpl',
                        interface_name: 'p_war::models::player::Iplayer',
                    },
                    {
                        type: 'enum',
                        name: 'core::bool',
                        variants: [
                            {
                                name: 'False',
                                type: '()',
                            },
                            {
                                name: 'True',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::player::Player',
                        members: [
                            {
                                name: 'address',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'max_px',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'num_owns',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'num_commit',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'current_px',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'last_date',
                                type: 'core::integer::u64',
                            },
                            {
                                name: 'is_banned',
                                type: 'core::bool',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::player::Iplayer',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::player::Player',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::player::player::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::player::player',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'game_id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'rate',
                        type: 'u64',
                        key: false,
                    },
                ],
                class_hash: '0x6bedf3685252745ac4f376f43c63c0594b2e146c7005d8eea206f2edc9f497f',
                original_class_hash:
                    '0x6bedf3685252745ac4f376f43c63c0594b2e146c7005d8eea206f2edc9f497f',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'pixel_recovery_rateImpl',
                        interface_name: 'p_war::models::proposal::Ipixel_recovery_rate',
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::proposal::PixelRecoveryRate',
                        members: [
                            {
                                name: 'game_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'rate',
                                type: 'core::integer::u64',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::proposal::Ipixel_recovery_rate',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::proposal::PixelRecoveryRate',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::proposal::pixel_recovery_rate::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::proposal::pixel_recovery_rate',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'player',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'game_id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'index',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'is_in_favor',
                        type: 'bool',
                        key: false,
                    },
                    {
                        name: 'px',
                        type: 'u32',
                        key: false,
                    },
                ],
                class_hash: '0x7cf83b952d7db2c69ad3ead0357513c6b519daffae9a4f9928fb0ad1752dba5',
                original_class_hash:
                    '0x7cf83b952d7db2c69ad3ead0357513c6b519daffae9a4f9928fb0ad1752dba5',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'player_voteImpl',
                        interface_name: 'p_war::models::proposal::Iplayer_vote',
                    },
                    {
                        type: 'enum',
                        name: 'core::bool',
                        variants: [
                            {
                                name: 'False',
                                type: '()',
                            },
                            {
                                name: 'True',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::proposal::PlayerVote',
                        members: [
                            {
                                name: 'player',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'game_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'index',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'is_in_favor',
                                type: 'core::bool',
                            },
                            {
                                name: 'px',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::proposal::Iplayer_vote',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::proposal::PlayerVote',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::proposal::player_vote::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::proposal::player_vote',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'game_id',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'index',
                        type: 'usize',
                        key: true,
                    },
                    {
                        name: 'author',
                        type: 'ContractAddress',
                        key: false,
                    },
                    {
                        name: 'proposal_type',
                        type: 'ProposalType',
                        key: false,
                    },
                    {
                        name: 'target_args_1',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'target_args_2',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'start',
                        type: 'u64',
                        key: false,
                    },
                    {
                        name: 'end',
                        type: 'u64',
                        key: false,
                    },
                    {
                        name: 'yes_px',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'no_px',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'is_activated',
                        type: 'bool',
                        key: false,
                    },
                ],
                class_hash: '0x71495ad698d62e44951ca28203da46746a30480972a97f8ba1c9ccd9c4a2169',
                original_class_hash:
                    '0x71495ad698d62e44951ca28203da46746a30480972a97f8ba1c9ccd9c4a2169',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'proposalImpl',
                        interface_name: 'p_war::models::proposal::Iproposal',
                    },
                    {
                        type: 'enum',
                        name: 'p_war::models::proposal::ProposalType',
                        variants: [
                            {
                                name: 'Unknown',
                                type: '()',
                            },
                            {
                                name: 'ToggleAllowedApp',
                                type: '()',
                            },
                            {
                                name: 'AddNewColor',
                                type: '()',
                            },
                            {
                                name: 'ExtendGameEndTime',
                                type: '()',
                            },
                            {
                                name: 'ChangePixelRecovery',
                                type: '()',
                            },
                            {
                                name: 'ExpandArea',
                                type: '()',
                            },
                            {
                                name: 'BanPlayerAddress',
                                type: '()',
                            },
                            {
                                name: 'ChangeMaxPXConfig',
                                type: '()',
                            },
                            {
                                name: 'ChangeWinnerConfig',
                                type: '()',
                            },
                            {
                                name: 'ChangePaintCost',
                                type: '()',
                            },
                            {
                                name: 'ResetToWhiteByCoordinates',
                                type: '()',
                            },
                            {
                                name: 'ResetToWhiteByColor',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'core::bool',
                        variants: [
                            {
                                name: 'False',
                                type: '()',
                            },
                            {
                                name: 'True',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'p_war::models::proposal::Proposal',
                        members: [
                            {
                                name: 'game_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'index',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'author',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'proposal_type',
                                type: 'p_war::models::proposal::ProposalType',
                            },
                            {
                                name: 'target_args_1',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'target_args_2',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'start',
                                type: 'core::integer::u64',
                            },
                            {
                                name: 'end',
                                type: 'core::integer::u64',
                            },
                            {
                                name: 'yes_px',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'no_px',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'is_activated',
                                type: 'core::bool',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'p_war::models::proposal::Iproposal',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'p_war::models::proposal::Proposal',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'p_war::models::proposal::proposal::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'p_war::models::proposal::proposal',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'owner',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'length',
                        type: 'u8',
                        key: false,
                    },
                    {
                        name: 'first_segment_id',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'last_segment_id',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'direction',
                        type: 'Direction',
                        key: false,
                    },
                    {
                        name: 'color',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'text',
                        type: 'felt252',
                        key: false,
                    },
                    {
                        name: 'is_dying',
                        type: 'bool',
                        key: false,
                    },
                ],
                class_hash: '0x6ad2fad00fbb98d63faa81e4a4d3289919296e643edd09244e359b19a9f0304',
                original_class_hash:
                    '0x6ad2fad00fbb98d63faa81e4a4d3289919296e643edd09244e359b19a9f0304',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'snakeImpl',
                        interface_name: 'pixelaw::apps::snake::app::Isnake',
                    },
                    {
                        type: 'enum',
                        name: 'pixelaw::core::utils::Direction',
                        variants: [
                            {
                                name: 'None',
                                type: '()',
                            },
                            {
                                name: 'Left',
                                type: '()',
                            },
                            {
                                name: 'Right',
                                type: '()',
                            },
                            {
                                name: 'Up',
                                type: '()',
                            },
                            {
                                name: 'Down',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'core::bool',
                        variants: [
                            {
                                name: 'False',
                                type: '()',
                            },
                            {
                                name: 'True',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::apps::snake::app::Snake',
                        members: [
                            {
                                name: 'owner',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'length',
                                type: 'core::integer::u8',
                            },
                            {
                                name: 'first_segment_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'last_segment_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'direction',
                                type: 'pixelaw::core::utils::Direction',
                            },
                            {
                                name: 'color',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'text',
                                type: 'core::felt252',
                            },
                            {
                                name: 'is_dying',
                                type: 'core::bool',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::apps::snake::app::Isnake',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::apps::snake::app::Snake',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::apps::snake::app::snake::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::apps::snake::app::snake',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'id',
                        type: 'u32',
                        key: true,
                    },
                    {
                        name: 'previous_id',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'next_id',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'x',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'y',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'pixel_original_color',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'pixel_original_text',
                        type: 'felt252',
                        key: false,
                    },
                    {
                        name: 'pixel_original_app',
                        type: 'ContractAddress',
                        key: false,
                    },
                ],
                class_hash: '0xa5fff6fee52fd6a9d07e39f7039926783a2d8fc397a87617593c689124e113',
                original_class_hash:
                    '0xa5fff6fee52fd6a9d07e39f7039926783a2d8fc397a87617593c689124e113',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'snake_segmentImpl',
                        interface_name: 'pixelaw::apps::snake::app::Isnake_segment',
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::apps::snake::app::SnakeSegment',
                        members: [
                            {
                                name: 'id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'previous_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'next_id',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'x',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'y',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'pixel_original_color',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'pixel_original_text',
                                type: 'core::felt252',
                            },
                            {
                                name: 'pixel_original_app',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::apps::snake::app::Isnake_segment',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::apps::snake::app::SnakeSegment',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::apps::snake::app::snake_segment::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::apps::snake::app::snake_segment',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'allowing_app',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'allowed_app',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'permission',
                        type: 'Permission',
                        key: false,
                    },
                ],
                class_hash: '0x55935fbd47fb70609ca521bbafaa69a03919f77c45bb8ad0e221af4658a9a6b',
                original_class_hash:
                    '0x55935fbd47fb70609ca521bbafaa69a03919f77c45bb8ad0e221af4658a9a6b',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'permissionsImpl',
                        interface_name: 'pixelaw::core::models::permissions::Ipermissions',
                    },
                    {
                        type: 'enum',
                        name: 'core::bool',
                        variants: [
                            {
                                name: 'False',
                                type: '()',
                            },
                            {
                                name: 'True',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::core::models::permissions::Permission',
                        members: [
                            {
                                name: 'app',
                                type: 'core::bool',
                            },
                            {
                                name: 'color',
                                type: 'core::bool',
                            },
                            {
                                name: 'owner',
                                type: 'core::bool',
                            },
                            {
                                name: 'text',
                                type: 'core::bool',
                            },
                            {
                                name: 'timestamp',
                                type: 'core::bool',
                            },
                            {
                                name: 'action',
                                type: 'core::bool',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::core::models::permissions::Permissions',
                        members: [
                            {
                                name: 'allowing_app',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'allowed_app',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'permission',
                                type: 'pixelaw::core::models::permissions::Permission',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::core::models::permissions::Ipermissions',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::core::models::permissions::Permissions',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::core::models::permissions::permissions::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::core::models::permissions::permissions',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'x',
                        type: 'u32',
                        key: true,
                    },
                    {
                        name: 'y',
                        type: 'u32',
                        key: true,
                    },
                    {
                        name: 'created_at',
                        type: 'u64',
                        key: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'u64',
                        key: false,
                    },
                    {
                        name: 'app',
                        type: 'ContractAddress',
                        key: false,
                    },
                    {
                        name: 'color',
                        type: 'u32',
                        key: false,
                    },
                    {
                        name: 'owner',
                        type: 'ContractAddress',
                        key: false,
                    },
                    {
                        name: 'text',
                        type: 'felt252',
                        key: false,
                    },
                    {
                        name: 'timestamp',
                        type: 'u64',
                        key: false,
                    },
                    {
                        name: 'action',
                        type: 'felt252',
                        key: false,
                    },
                ],
                class_hash: '0x19bf5119a6b23d3f098888ea27e5639d5b89ccf046d22e00c767cd4d3f78d9d',
                original_class_hash:
                    '0x19bf5119a6b23d3f098888ea27e5639d5b89ccf046d22e00c767cd4d3f78d9d',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'pixelImpl',
                        interface_name: 'pixelaw::core::models::pixel::Ipixel',
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::core::models::pixel::Pixel',
                        members: [
                            {
                                name: 'x',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'y',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'created_at',
                                type: 'core::integer::u64',
                            },
                            {
                                name: 'updated_at',
                                type: 'core::integer::u64',
                            },
                            {
                                name: 'app',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'color',
                                type: 'core::integer::u32',
                            },
                            {
                                name: 'owner',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'text',
                                type: 'core::felt252',
                            },
                            {
                                name: 'timestamp',
                                type: 'core::integer::u64',
                            },
                            {
                                name: 'action',
                                type: 'core::felt252',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::core::models::pixel::Ipixel',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::core::models::pixel::Pixel',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::core::models::pixel::pixel::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::core::models::pixel::pixel',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'id',
                        type: 'felt252',
                        key: true,
                    },
                    {
                        name: 'valid',
                        type: 'bool',
                        key: false,
                    },
                ],
                class_hash: '0x4a448f9e37c98cc9af18ed6b5f0e144af59dc7ebb28fd553ee27e06d1e11d1c',
                original_class_hash:
                    '0x4a448f9e37c98cc9af18ed6b5f0e144af59dc7ebb28fd553ee27e06d1e11d1c',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'queue_itemImpl',
                        interface_name: 'pixelaw::core::models::queue::Iqueue_item',
                    },
                    {
                        type: 'enum',
                        name: 'core::bool',
                        variants: [
                            {
                                name: 'False',
                                type: '()',
                            },
                            {
                                name: 'True',
                                type: '()',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::core::models::queue::QueueItem',
                        members: [
                            {
                                name: 'id',
                                type: 'core::felt252',
                            },
                            {
                                name: 'valid',
                                type: 'core::bool',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::core::models::queue::Iqueue_item',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::core::models::queue::QueueItem',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::core::models::queue::queue_item::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::core::models::queue::queue_item',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'system',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'name',
                        type: 'felt252',
                        key: false,
                    },
                    {
                        name: 'manifest',
                        type: 'felt252',
                        key: false,
                    },
                    {
                        name: 'icon',
                        type: 'felt252',
                        key: false,
                    },
                    {
                        name: 'action',
                        type: 'felt252',
                        key: false,
                    },
                ],
                class_hash: '0x74c630be9062098affb2ac8b27955ebaa8c863319800213a34ccc02ca97fc9',
                original_class_hash:
                    '0x74c630be9062098affb2ac8b27955ebaa8c863319800213a34ccc02ca97fc9',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'appImpl',
                        interface_name: 'pixelaw::core::models::registry::Iapp',
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::core::models::registry::App',
                        members: [
                            {
                                name: 'system',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'manifest',
                                type: 'core::felt252',
                            },
                            {
                                name: 'icon',
                                type: 'core::felt252',
                            },
                            {
                                name: 'action',
                                type: 'core::felt252',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::core::models::registry::Iapp',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::core::models::registry::App',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::core::models::registry::app::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::core::models::registry::app',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'name',
                        type: 'felt252',
                        key: true,
                    },
                    {
                        name: 'system',
                        type: 'ContractAddress',
                        key: false,
                    },
                ],
                class_hash: '0x2fbf92676699542bb22322de6b8c9930c28a017b89f444ebdc7fb293496295d',
                original_class_hash:
                    '0x2fbf92676699542bb22322de6b8c9930c28a017b89f444ebdc7fb293496295d',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'app_nameImpl',
                        interface_name: 'pixelaw::core::models::registry::Iapp_name',
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::core::models::registry::AppName',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'system',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::core::models::registry::Iapp_name',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::core::models::registry::AppName',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::core::models::registry::app_name::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::core::models::registry::app_name',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'system',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'player',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'action',
                        type: 'felt252',
                        key: false,
                    },
                ],
                class_hash: '0x21694db3f07ef20ac056336fd80757d8883bae2a2329ca9ade1d681fe9ae883',
                original_class_hash:
                    '0x21694db3f07ef20ac056336fd80757d8883bae2a2329ca9ade1d681fe9ae883',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'app_userImpl',
                        interface_name: 'pixelaw::core::models::registry::Iapp_user',
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::core::models::registry::AppUser',
                        members: [
                            {
                                name: 'system',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'player',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'action',
                                type: 'core::felt252',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::core::models::registry::Iapp_user',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::core::models::registry::AppUser',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::core::models::registry::app_user::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::core::models::registry::app_user',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'key',
                        type: 'felt252',
                        key: true,
                    },
                    {
                        name: 'value',
                        type: 'ContractAddress',
                        key: false,
                    },
                ],
                class_hash: '0x29faa42389b762ddb248311c81d68095c0fec2cfd7810b31e62af19675b0afb',
                original_class_hash:
                    '0x29faa42389b762ddb248311c81d68095c0fec2cfd7810b31e62af19675b0afb',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'core_actions_addressImpl',
                        interface_name: 'pixelaw::core::models::registry::Icore_actions_address',
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::core::models::registry::CoreActionsAddress',
                        members: [
                            {
                                name: 'key',
                                type: 'core::felt252',
                            },
                            {
                                name: 'value',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::core::models::registry::Icore_actions_address',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::core::models::registry::CoreActionsAddress',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::core::models::registry::core_actions_address::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::core::models::registry::core_actions_address',
            },
            {
                kind: 'DojoModel',
                members: [
                    {
                        name: 'system',
                        type: 'ContractAddress',
                        key: true,
                    },
                    {
                        name: 'selector',
                        type: 'felt252',
                        key: true,
                    },
                    {
                        name: 'instruction',
                        type: 'felt252',
                        key: false,
                    },
                ],
                class_hash: '0x40bff7008f593e3fa201c4b22e5cf172217620a5605bdab71e09d9a9a9d781a',
                original_class_hash:
                    '0x40bff7008f593e3fa201c4b22e5cf172217620a5605bdab71e09d9a9a9d781a',
                abi: [
                    {
                        type: 'impl',
                        name: 'DojoModelImpl',
                        interface_name: 'dojo::model::IDojoModel',
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::integer::u8>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::integer::u8>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::felt252>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::felt252>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<core::array::Span::<core::felt252>>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Struct',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                        members: [
                            {
                                name: 'snapshot',
                                type: '@core::array::Array::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'struct',
                        name: 'dojo::database::introspect::Enum',
                        members: [
                            {
                                name: 'name',
                                type: 'core::felt252',
                            },
                            {
                                name: 'attrs',
                                type: 'core::array::Span::<core::felt252>',
                            },
                            {
                                name: 'children',
                                type: 'core::array::Span::<(core::felt252, core::array::Span::<core::felt252>)>',
                            },
                        ],
                    },
                    {
                        type: 'enum',
                        name: 'dojo::database::introspect::Ty',
                        variants: [
                            {
                                name: 'Primitive',
                                type: 'core::felt252',
                            },
                            {
                                name: 'Struct',
                                type: 'dojo::database::introspect::Struct',
                            },
                            {
                                name: 'Enum',
                                type: 'dojo::database::introspect::Enum',
                            },
                            {
                                name: 'Tuple',
                                type: 'core::array::Span::<core::array::Span::<core::felt252>>',
                            },
                            {
                                name: 'Array',
                                type: 'core::integer::u32',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'dojo::model::IDojoModel',
                        items: [
                            {
                                type: 'function',
                                name: 'name',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::felt252',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'unpacked_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'packed_size',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::integer::u32',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'layout',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'core::array::Span::<core::integer::u8>',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                            {
                                type: 'function',
                                name: 'schema',
                                inputs: [],
                                outputs: [
                                    {
                                        type: 'dojo::database::introspect::Ty',
                                    },
                                ],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'impl',
                        name: 'instructionImpl',
                        interface_name: 'pixelaw::core::models::registry::Iinstruction',
                    },
                    {
                        type: 'struct',
                        name: 'pixelaw::core::models::registry::Instruction',
                        members: [
                            {
                                name: 'system',
                                type: 'core::starknet::contract_address::ContractAddress',
                            },
                            {
                                name: 'selector',
                                type: 'core::felt252',
                            },
                            {
                                name: 'instruction',
                                type: 'core::felt252',
                            },
                        ],
                    },
                    {
                        type: 'interface',
                        name: 'pixelaw::core::models::registry::Iinstruction',
                        items: [
                            {
                                type: 'function',
                                name: 'ensure_abi',
                                inputs: [
                                    {
                                        name: 'model',
                                        type: 'pixelaw::core::models::registry::Instruction',
                                    },
                                ],
                                outputs: [],
                                state_mutability: 'view',
                            },
                        ],
                    },
                    {
                        type: 'event',
                        name: 'pixelaw::core::models::registry::instruction::Event',
                        kind: 'enum',
                        variants: [],
                    },
                ],
                name: 'pixelaw::core::models::registry::instruction',
            },
        ],
        world: {
            abi: [
                {
                    type: 'impl',
                    name: 'World',
                    interface_name: 'dojo::world::IWorld',
                },
                {
                    type: 'struct',
                    name: 'core::array::Span::<core::felt252>',
                    members: [
                        {
                            name: 'snapshot',
                            type: '@core::array::Array::<core::felt252>',
                        },
                    ],
                },
                {
                    type: 'struct',
                    name: 'dojo::resource_metadata::ResourceMetadata',
                    members: [
                        {
                            name: 'resource_id',
                            type: 'core::felt252',
                        },
                        {
                            name: 'metadata_uri',
                            type: 'core::array::Span::<core::felt252>',
                        },
                    ],
                },
                {
                    type: 'struct',
                    name: 'core::array::Span::<core::integer::u8>',
                    members: [
                        {
                            name: 'snapshot',
                            type: '@core::array::Array::<core::integer::u8>',
                        },
                    ],
                },
                {
                    type: 'enum',
                    name: 'core::bool',
                    variants: [
                        {
                            name: 'False',
                            type: '()',
                        },
                        {
                            name: 'True',
                            type: '()',
                        },
                    ],
                },
                {
                    type: 'interface',
                    name: 'dojo::world::IWorld',
                    items: [
                        {
                            type: 'function',
                            name: 'metadata',
                            inputs: [
                                {
                                    name: 'resource_id',
                                    type: 'core::felt252',
                                },
                            ],
                            outputs: [
                                {
                                    type: 'dojo::resource_metadata::ResourceMetadata',
                                },
                            ],
                            state_mutability: 'view',
                        },
                        {
                            type: 'function',
                            name: 'set_metadata',
                            inputs: [
                                {
                                    name: 'metadata',
                                    type: 'dojo::resource_metadata::ResourceMetadata',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'model',
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'core::felt252',
                                },
                            ],
                            outputs: [
                                {
                                    type: '(core::starknet::class_hash::ClassHash, core::starknet::contract_address::ContractAddress)',
                                },
                            ],
                            state_mutability: 'view',
                        },
                        {
                            type: 'function',
                            name: 'register_model',
                            inputs: [
                                {
                                    name: 'class_hash',
                                    type: 'core::starknet::class_hash::ClassHash',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'deploy_contract',
                            inputs: [
                                {
                                    name: 'salt',
                                    type: 'core::felt252',
                                },
                                {
                                    name: 'class_hash',
                                    type: 'core::starknet::class_hash::ClassHash',
                                },
                            ],
                            outputs: [
                                {
                                    type: 'core::starknet::contract_address::ContractAddress',
                                },
                            ],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'upgrade_contract',
                            inputs: [
                                {
                                    name: 'address',
                                    type: 'core::starknet::contract_address::ContractAddress',
                                },
                                {
                                    name: 'class_hash',
                                    type: 'core::starknet::class_hash::ClassHash',
                                },
                            ],
                            outputs: [
                                {
                                    type: 'core::starknet::class_hash::ClassHash',
                                },
                            ],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'uuid',
                            inputs: [],
                            outputs: [
                                {
                                    type: 'core::integer::u32',
                                },
                            ],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'emit',
                            inputs: [
                                {
                                    name: 'keys',
                                    type: 'core::array::Array::<core::felt252>',
                                },
                                {
                                    name: 'values',
                                    type: 'core::array::Span::<core::felt252>',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'view',
                        },
                        {
                            type: 'function',
                            name: 'entity',
                            inputs: [
                                {
                                    name: 'model',
                                    type: 'core::felt252',
                                },
                                {
                                    name: 'keys',
                                    type: 'core::array::Span::<core::felt252>',
                                },
                                {
                                    name: 'layout',
                                    type: 'core::array::Span::<core::integer::u8>',
                                },
                            ],
                            outputs: [
                                {
                                    type: 'core::array::Span::<core::felt252>',
                                },
                            ],
                            state_mutability: 'view',
                        },
                        {
                            type: 'function',
                            name: 'set_entity',
                            inputs: [
                                {
                                    name: 'model',
                                    type: 'core::felt252',
                                },
                                {
                                    name: 'keys',
                                    type: 'core::array::Span::<core::felt252>',
                                },
                                {
                                    name: 'values',
                                    type: 'core::array::Span::<core::felt252>',
                                },
                                {
                                    name: 'layout',
                                    type: 'core::array::Span::<core::integer::u8>',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'base',
                            inputs: [],
                            outputs: [
                                {
                                    type: 'core::starknet::class_hash::ClassHash',
                                },
                            ],
                            state_mutability: 'view',
                        },
                        {
                            type: 'function',
                            name: 'delete_entity',
                            inputs: [
                                {
                                    name: 'model',
                                    type: 'core::felt252',
                                },
                                {
                                    name: 'keys',
                                    type: 'core::array::Span::<core::felt252>',
                                },
                                {
                                    name: 'layout',
                                    type: 'core::array::Span::<core::integer::u8>',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'is_owner',
                            inputs: [
                                {
                                    name: 'address',
                                    type: 'core::starknet::contract_address::ContractAddress',
                                },
                                {
                                    name: 'resource',
                                    type: 'core::felt252',
                                },
                            ],
                            outputs: [
                                {
                                    type: 'core::bool',
                                },
                            ],
                            state_mutability: 'view',
                        },
                        {
                            type: 'function',
                            name: 'grant_owner',
                            inputs: [
                                {
                                    name: 'address',
                                    type: 'core::starknet::contract_address::ContractAddress',
                                },
                                {
                                    name: 'resource',
                                    type: 'core::felt252',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'revoke_owner',
                            inputs: [
                                {
                                    name: 'address',
                                    type: 'core::starknet::contract_address::ContractAddress',
                                },
                                {
                                    name: 'resource',
                                    type: 'core::felt252',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'is_writer',
                            inputs: [
                                {
                                    name: 'model',
                                    type: 'core::felt252',
                                },
                                {
                                    name: 'system',
                                    type: 'core::starknet::contract_address::ContractAddress',
                                },
                            ],
                            outputs: [
                                {
                                    type: 'core::bool',
                                },
                            ],
                            state_mutability: 'view',
                        },
                        {
                            type: 'function',
                            name: 'grant_writer',
                            inputs: [
                                {
                                    name: 'model',
                                    type: 'core::felt252',
                                },
                                {
                                    name: 'system',
                                    type: 'core::starknet::contract_address::ContractAddress',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'external',
                        },
                        {
                            type: 'function',
                            name: 'revoke_writer',
                            inputs: [
                                {
                                    name: 'model',
                                    type: 'core::felt252',
                                },
                                {
                                    name: 'system',
                                    type: 'core::starknet::contract_address::ContractAddress',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'external',
                        },
                    ],
                },
                {
                    type: 'impl',
                    name: 'UpgradeableWorld',
                    interface_name: 'dojo::world::IUpgradeableWorld',
                },
                {
                    type: 'interface',
                    name: 'dojo::world::IUpgradeableWorld',
                    items: [
                        {
                            type: 'function',
                            name: 'upgrade',
                            inputs: [
                                {
                                    name: 'new_class_hash',
                                    type: 'core::starknet::class_hash::ClassHash',
                                },
                            ],
                            outputs: [],
                            state_mutability: 'external',
                        },
                    ],
                },
                {
                    type: 'constructor',
                    name: 'constructor',
                    inputs: [
                        {
                            name: 'contract_base',
                            type: 'core::starknet::class_hash::ClassHash',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::WorldSpawned',
                    kind: 'struct',
                    members: [
                        {
                            name: 'address',
                            type: 'core::starknet::contract_address::ContractAddress',
                            kind: 'data',
                        },
                        {
                            name: 'creator',
                            type: 'core::starknet::contract_address::ContractAddress',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::ContractDeployed',
                    kind: 'struct',
                    members: [
                        {
                            name: 'salt',
                            type: 'core::felt252',
                            kind: 'data',
                        },
                        {
                            name: 'class_hash',
                            type: 'core::starknet::class_hash::ClassHash',
                            kind: 'data',
                        },
                        {
                            name: 'address',
                            type: 'core::starknet::contract_address::ContractAddress',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::ContractUpgraded',
                    kind: 'struct',
                    members: [
                        {
                            name: 'class_hash',
                            type: 'core::starknet::class_hash::ClassHash',
                            kind: 'data',
                        },
                        {
                            name: 'address',
                            type: 'core::starknet::contract_address::ContractAddress',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::WorldUpgraded',
                    kind: 'struct',
                    members: [
                        {
                            name: 'class_hash',
                            type: 'core::starknet::class_hash::ClassHash',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::MetadataUpdate',
                    kind: 'struct',
                    members: [
                        {
                            name: 'resource',
                            type: 'core::felt252',
                            kind: 'data',
                        },
                        {
                            name: 'uri',
                            type: 'core::array::Span::<core::felt252>',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::ModelRegistered',
                    kind: 'struct',
                    members: [
                        {
                            name: 'name',
                            type: 'core::felt252',
                            kind: 'data',
                        },
                        {
                            name: 'class_hash',
                            type: 'core::starknet::class_hash::ClassHash',
                            kind: 'data',
                        },
                        {
                            name: 'prev_class_hash',
                            type: 'core::starknet::class_hash::ClassHash',
                            kind: 'data',
                        },
                        {
                            name: 'address',
                            type: 'core::starknet::contract_address::ContractAddress',
                            kind: 'data',
                        },
                        {
                            name: 'prev_address',
                            type: 'core::starknet::contract_address::ContractAddress',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::StoreSetRecord',
                    kind: 'struct',
                    members: [
                        {
                            name: 'table',
                            type: 'core::felt252',
                            kind: 'data',
                        },
                        {
                            name: 'keys',
                            type: 'core::array::Span::<core::felt252>',
                            kind: 'data',
                        },
                        {
                            name: 'values',
                            type: 'core::array::Span::<core::felt252>',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::StoreDelRecord',
                    kind: 'struct',
                    members: [
                        {
                            name: 'table',
                            type: 'core::felt252',
                            kind: 'data',
                        },
                        {
                            name: 'keys',
                            type: 'core::array::Span::<core::felt252>',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::WriterUpdated',
                    kind: 'struct',
                    members: [
                        {
                            name: 'model',
                            type: 'core::felt252',
                            kind: 'data',
                        },
                        {
                            name: 'system',
                            type: 'core::starknet::contract_address::ContractAddress',
                            kind: 'data',
                        },
                        {
                            name: 'value',
                            type: 'core::bool',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::OwnerUpdated',
                    kind: 'struct',
                    members: [
                        {
                            name: 'address',
                            type: 'core::starknet::contract_address::ContractAddress',
                            kind: 'data',
                        },
                        {
                            name: 'resource',
                            type: 'core::felt252',
                            kind: 'data',
                        },
                        {
                            name: 'value',
                            type: 'core::bool',
                            kind: 'data',
                        },
                    ],
                },
                {
                    type: 'event',
                    name: 'dojo::world::world::Event',
                    kind: 'enum',
                    variants: [
                        {
                            name: 'WorldSpawned',
                            type: 'dojo::world::world::WorldSpawned',
                            kind: 'nested',
                        },
                        {
                            name: 'ContractDeployed',
                            type: 'dojo::world::world::ContractDeployed',
                            kind: 'nested',
                        },
                        {
                            name: 'ContractUpgraded',
                            type: 'dojo::world::world::ContractUpgraded',
                            kind: 'nested',
                        },
                        {
                            name: 'WorldUpgraded',
                            type: 'dojo::world::world::WorldUpgraded',
                            kind: 'nested',
                        },
                        {
                            name: 'MetadataUpdate',
                            type: 'dojo::world::world::MetadataUpdate',
                            kind: 'nested',
                        },
                        {
                            name: 'ModelRegistered',
                            type: 'dojo::world::world::ModelRegistered',
                            kind: 'nested',
                        },
                        {
                            name: 'StoreSetRecord',
                            type: 'dojo::world::world::StoreSetRecord',
                            kind: 'nested',
                        },
                        {
                            name: 'StoreDelRecord',
                            type: 'dojo::world::world::StoreDelRecord',
                            kind: 'nested',
                        },
                        {
                            name: 'WriterUpdated',
                            type: 'dojo::world::world::WriterUpdated',
                            kind: 'nested',
                        },
                        {
                            name: 'OwnerUpdated',
                            type: 'dojo::world::world::OwnerUpdated',
                            kind: 'nested',
                        },
                    ],
                },
            ],
            address: worldAddress,
        },
    };
}
