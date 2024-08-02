/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722619954", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <div id="footer-container" class="max-w-screen-xl mx-auto lg:py-8">
                <hr id="footer-divider" class="my-6 border-pink-300 border-opacity-50 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10 filter brightness-0 invert" alt="Landwind Logo" />
                            EtherScope: Real-Time Ethereum Monitoring
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-300">
                        Stay ahead of the curve with EtherScope's cutting-edge transaction analysis tools. Gain valuable insights into the ever-evolving Ethereum network and make informed decisions for your projects.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
