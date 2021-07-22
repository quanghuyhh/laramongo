<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="
                    flex
                    items-center
                    text-sm
                    font-medium
                    text-gray-500
                    hover:text-gray-700
                    hover:border-gray-300
                    focus:outline-none
                    focus:text-gray-700
                    focus:border-gray-300
                    transition
                    duration-150
                    ease-in-out
                "
            >
                <div v-text="userName || 'Login'"></div>

                <div class="ml-1">
                    <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <MenuItems
                class="
                    absolute
                    right-0
                    w-56
                    mt-2
                    origin-top-right
                    bg-white
                    divide-y divide-gray-100
                    rounded-md
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                    py-1
                "
            >
                <div class="">
                    <MenuItem v-slot="{ active }">
                        <a
                            class="
                                block
                                px-4
                                py-2
                                text-sm
                                leading-5
                                text-gray-700
                                hover:bg-gray-100
                                focus:outline-none
                                focus:bg-gray-100
                                transition
                                duration-150
                                ease-in-out
                            "
                            :class="{ 'bg-blue-500': active }"
                            href="#"
                            @click="logout"
                        >
                            Log Out
                        </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { mapGetters } from 'vuex';

export default {
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    },
    computed: {
        ...mapGetters('auth', ['userName'])
    },
    methods: {
        logout() {
            this.$store.commit('auth/SET_USER', null);
            this.$router.push('/login');
        }
    }
};
</script>
