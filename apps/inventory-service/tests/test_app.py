import unittest
from app import app

class InventoryTestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_inventory(self):
        response = self.client.get('/inventory')
        self.assertEqual(response.status_code, 200)
        self.assertIn('items', response.get_json())

if __name__ == '__main__':
    unittest.main()
