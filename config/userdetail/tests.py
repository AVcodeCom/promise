from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework_simplejwt.authentication import TokenUser
from rest_framework.authtoken.models import Token
from django.urls import reverse
from pprint import pprint
from .models import User
from .serializers import CustomUserSerializer
from django.contrib.auth.models import User
try:
    from config.settings_dev import REST_URL
except ImportError:
    from config.settings_prod import REST_URL


TEST_USERNAME = 'testcase'
TEST_PASSWORD = 'JKDbfh2f'
TEST_EMAIL = 'blablabla@gmail.com'

TEST_USERNAME2 = 'testcase11'
TEST_PASSWORD2 = 'JKDbfh2f1'
TEST_EMAIL2 = 'blablabla@gma11il.com'

TEST_USERNAME3 = 'testca123se11'
TEST_PASSWORD3 = 'JKDbfh2f1231'
TEST_EMAIL3 = 'blablab123la@gma11il.com'

class RegistrationsTestCase(APITestCase):

    def get_started(self):
        self.data = {
            'username': TEST_USERNAME,
            'password': TEST_PASSWORD,
            'email': TEST_EMAIL,
        }
        registration = self.client.post(REST_URL + '/api/v1/data/auth/users/', data=self.data)
        auth = self.client.post(REST_URL + '/api/v1/data/auth/jwt/create/', data=self.data)
        data_auth = auth.data['access']
        self.client.credentials(HTTP_AUTHORIZATION='Bearer {0}'.format(data_auth))

    def get_started_another(self):
        self.data = {
            'username': TEST_USERNAME,
            'password': TEST_PASSWORD,
            'email': TEST_EMAIL,
        }
        registration = self.client.post(REST_URL + '/api/v1/data/auth/users/', data=self.data)
        auth = self.client.post(REST_URL + '/api/v1/data/auth/jwt/create/', data=self.data)
        data_auth = auth.data['access']
        self.client.credentials(HTTP_AUTHORIZATION='Bearer {0}'.format(data_auth))


    def test_registations(self):
        self.data = {
            'username': TEST_USERNAME,
            'password': TEST_PASSWORD,
            'email': TEST_EMAIL,
        }
        registration = self.client.post(REST_URL + '/api/v1/data/auth/users/', data=self.data)

        self.assertEqual(registration.status_code, status.HTTP_201_CREATED, registration.status_code)
        self.assertEqual(registration.data, {'email': 'blablabla@gmail.com', 'username': 'testcase', 'id': 1}, registration.data)

    def test_authorization(self):
        self.data = {
            'username': TEST_USERNAME,
            'password': TEST_PASSWORD,
            'email': TEST_EMAIL,
        }
        registration = self.client.post(REST_URL + '/api/v1/data/auth/users/', data=self.data)
        auth = self.client.post(REST_URL + '/api/v1/data/auth/jwt/create/', data=self.data)
        self.assertEqual(auth.status_code, status.HTTP_200_OK, auth.data)
        self.assertEqual(len(auth.data), 2, auth.data)
        data_auth = auth.data['access']
        self.client.credentials(HTTP_AUTHORIZATION='Bearer {0}'.format(data_auth))

        #

    def test_create_promise(self):
        promise_data = {
            'name': 'example_name',
            'description': 'example_desc',
            'deadline_row': '5 min',
            'status': 'Y',
            'importance': '3',
            'iis_approved': False,
        }
        self.get_started()
        new_promise = self.client.post(REST_URL + '/api/v1/data/promise/new/', data=promise_data)
        # print(new_promise.data)
        self.assertEqual(new_promise.status_code, status.HTTP_201_CREATED, new_promise.data)

    # def test_create_promise_fail(self):
    #     promise_data = {
    #         'name': 'example_name',
    #         'description': 'example_desc',
    #         'deadline_row': '',
    #     }
    #     self.get_started()
    #     new_promise = self.client.post(REST_URL + '/api/v1/data/promise/new/', data=promise_data)
    #     # print(new_promise.data)
    #     self.assertEqual(new_promise.status_code, status.HTTP_400_BAD_REQUEST, new_promise.data)

        #

    def test_patch_promise(self):
        self.get_started()
        promise_data = {
            'name': 'example_name',
            'description': 'example_desc',
            'deadline_row': '5 hour',
            'status': 'Y',
            'importance': '3',
            'iis_approved': False,
        }

        change_data = {
            'name': 'example_name',
            'status': 'Y',
            'importance': '3',
            'iis_approved': False,
            'description': 'example_desc',
            'deadline_row': '5 hour',

        }
        self.get_started()
        new_promise = self.client.post(REST_URL + '/api/v1/data/promise/new/', data=promise_data)
        # print(new_promise.data)
        slug = new_promise.data['slug']
        change_promise = self.client.patch(REST_URL + f'/api/v1/data/promise/{slug}/', data=change_data)
        # print(change_promise.data)

        self.assertEqual(new_promise.data['slug'], change_promise.data['slug'])
        self.assertEqual(new_promise.status_code, status.HTTP_201_CREATED, new_promise.data)

    # #
    def test_list_promise(self):
        self.get_started()
        self.test_create_promise()

        list_promise = self.client.get(REST_URL + '/api/v1/data/promise/')
        from pprint import pprint
        # print(list_promise.data['results'][0])

        slug = list_promise.data['results'][0]['slug']
        # self.assertEqual(list_promise.data['count'], 1, list_promise.data['count'])
        self.assertEqual(list_promise.status_code, status.HTTP_200_OK, list_promise.status_code)
        # print(list_promise.data['results'][0])
        self.assertEqual(len(list_promise.data['results'][0]), 13, list_promise.data)
        self.assertFalse(None in list_promise.data['results'][0])
        return slug
    #
    def test_single_promise(self):
        self.test_list_promise()
        single_promise = self.client.get(REST_URL + f'/api/v1/data/promise/{self.test_list_promise()}/')
        # pprint(single_promise.data)
        #
        self.assertEqual(single_promise.status_code, status.HTTP_200_OK, single_promise.status_code)


    #
    def test_get_userinfo(self):
        self.get_started()

        take_user = self.client.get(REST_URL + '/api/v1/data/users/1/')
        # print(take_user.data)
        self.assertEqual(take_user.status_code, status.HTTP_200_OK, take_user.status_code)
        self.assertEqual(take_user.data['bio'], '', take_user.data)

        user_data = {
            'bio': 'example bio'
        }
        patch_user = self.client.patch(REST_URL + '/api/v1/data/users/1/', data=user_data)
        # print(patch_user.data)
        self.assertEqual(patch_user.status_code, status.HTTP_200_OK, patch_user.status_code)
        self.assertEqual(patch_user.data['bio'], 'example bio', patch_user.data)

        after_patch = self.client.get(REST_URL + '/api/v1/data/users/1/')
        # print(after_patch.data)
        self.assertEqual(after_patch.status_code, status.HTTP_200_OK, after_patch.status_code)
        self.assertEqual(after_patch.data['bio'], 'example bio', after_patch.data)
        self.assertEqual(patch_user.data, after_patch.data)

    def test_get_started_CATEGORY(self):
        self.data = {
            'username': TEST_USERNAME,
            'password': TEST_PASSWORD,
            'email': TEST_EMAIL,
        }
        registration = self.client.post(REST_URL + '/api/v1/data/auth/users/', data=self.data)
        auth = self.client.post(REST_URL + '/api/v1/data/auth/jwt/create/', data=self.data)
        data_auth = auth.data['access']
        self.client.credentials(HTTP_AUTHORIZATION='Bearer {0}'.format(data_auth))
        for i in range(10):
            data = {
                'name': f'Home{i}',
                'color': f'Blue{i}'
            }
            new_category = self.client.post(REST_URL + '/api/v1/data/category/new/', data=data)
            self.assertEqual(new_category.status_code, status.HTTP_201_CREATED, new_category.status_code)
        list_category = self.client.get(REST_URL + '/api/v1/data/category/')
        print(list_category.data)
        # -----------------------------------------

        self.data1 = {
            'username': TEST_USERNAME2,
            'password': TEST_PASSWORD2,
            'email': TEST_EMAIL2,
        }
        registration = self.client.post(REST_URL + '/api/v1/data/auth/users/', data=self.data1)
        auth = self.client.post(REST_URL + '/api/v1/data/auth/jwt/create/', data=self.data1)
        data_auth = auth.data['access']
        self.client.credentials(HTTP_AUTHORIZATION='Bearer {0}'.format(data_auth))
        for i in range(5):
            data2 = {
                'name': f'Work{i}',
                'color': f'Red{i}'
            }
            new_category = self.client.post(REST_URL + '/api/v1/data/category/new/', data=data2)
            self.assertEqual(new_category.status_code, status.HTTP_201_CREATED, new_category.status_code)

        count_users = self.client.get(REST_URL + '/api/v1/data/users/')
        # print(count_users.data)
        # print(count_users.data['count'])
        self.assertEqual(count_users.data['count'], 2, count_users.data['count'])

        list_category = self.client.get(REST_URL + '/api/v1/data/category/')
        print(list_category.data)
        print(len(list_category.data))
        self.assertEqual(len(list_category.data), 5, len(list_category.data))
        # print(len(count_users.data))

        # -----------------------------------------

        self.data3 = {
            'username': TEST_USERNAME3,
            'password': TEST_PASSWORD3,
            'email': TEST_EMAIL3,
        }
        registration = self.client.post(REST_URL + '/api/v1/data/auth/users/', data=self.data3)
        auth = self.client.post(REST_URL + '/api/v1/data/auth/jwt/create/', data=self.data3)
        data_auth = auth.data['access']
        self.client.credentials(HTTP_AUTHORIZATION='Bearer {0}'.format(data_auth))
        for i in range(50):
            data3 = {
                'name': f'Chillout{i}',
                'color': f'Orange{i}'
            }
            new_category = self.client.post(REST_URL + '/api/v1/data/category/new/', data=data3)
            self.assertEqual(new_category.status_code, status.HTTP_201_CREATED, new_category.status_code)

        count_users = self.client.get(REST_URL + '/api/v1/data/users/')
        # print(count_users.data)
        # print(count_users.data['count'])
        self.assertEqual(count_users.data['count'], 3, count_users.data['count'])

        list_category = self.client.get(REST_URL + '/api/v1/data/category/')
        print(list_category.data)
        print(len(list_category.data))
        self.assertEqual(len(list_category.data), 50, len(list_category.data))
        self.assertEqual(list_category.data[-1]['id'], 65, list_category.data[-1]['id'])
        print(list_category.data[-1]['id'])



    # def test_category(self):
    #     self.get_started()
    #     for i in range(10):
    #         data = {
    #             'name': f'Home{i}',
    #             'color': f'Blue{i}'
    #         }
    #         new_category = self.client.post(REST_URL + '/api/v1/data/category/new/', data=data)
    #         self.assertEqual(new_category.status_code, status.HTTP_201_CREATED, new_category.status_code)
    #         print(new_category.data)
    #     list_category = self.client.get(REST_URL + '/api/v1/data/category/')
    #     print(list_category.data)
    #     print(len(list_category.data))
    #     self.get_started_another()
    #     count_users = self.client.get(REST_URL + '/api/v1/data/users/')
    #     print(count_users.data)