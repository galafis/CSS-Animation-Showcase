import os
import unittest

class TestProjectStructure(unittest.TestCase):

    def setUp(self):
        self.base_path = "CSS-Animation-Showcase"

    def test_index_html_exists(self):
        path = os.path.join(self.base_path, "index.html")
        self.assertTrue(os.path.exists(path), f"index.html not found at {path}")

    def test_styles_css_exists(self):
        path = os.path.join(self.base_path, "assets", "css", "styles.css")
        self.assertTrue(os.path.exists(path), f"styles.css not found at {path}")

    def test_script_js_exists(self):
        path = os.path.join(self.base_path, "assets", "js", "script.js")
        self.assertTrue(os.path.exists(path), f"script.js not found at {path}")

    def test_index_html_links_css_and_js(self):
        with open(os.path.join(self.base_path, "index.html"), "r") as f:
            content = f.read()
        self.assertIn("href=\"assets/css/styles.css\"", content, "index.html does not link to styles.css correctly")
        self.assertIn("src=\"assets/js/script.js\"", content, "index.html does not link to script.js correctly")

if __name__ == '__main__':
    unittest.main()

