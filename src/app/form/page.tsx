'use client';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const categories = ["Singer", "Dancer", "Speaker", "DJ"];
const languages = ["Hindi", "English", "Punjabi", "Bengali"];
const fees = ["₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000+"];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
  category: Yup.array().min(1, "Select at least one category"),
  languages: Yup.array().min(1, "Select at least one language"),
  feeRange: Yup.string().required("Fee is required"),
  location: Yup.string().required("Location is required")
});

export default function ArtistFormPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Artist Onboarding Form</h1>

      <Formik
        initialValues={{
          name: "",
          bio: "",
          category: [],
          languages: [],
          feeRange: "",
          location: "",
          image: null
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Submitted Values:", values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            {/* Name */}
            <div>
              <label>Name</label>
              <Field name="name" className="w-full border p-2 rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Bio */}
            <div>
              <label>Bio</label>
              <Field name="bio" as="textarea" className="w-full border p-2 rounded" />
              <ErrorMessage name="bio" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Categories */}
            <div>
              <label>Category</label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <label key={cat}>
                    <Field type="checkbox" name="category" value={cat} />
                    <span className="ml-2">{cat}</span>
                  </label>
                ))}
              </div>
              <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Languages */}
            <div>
              <label>Languages Spoken</label>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <label key={lang}>
                    <Field type="checkbox" name="languages" value={lang} />
                    <span className="ml-2">{lang}</span>
                  </label>
                ))}
              </div>
              <ErrorMessage name="languages" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Fee Range */}
            <div>
              <label>Fee Range</label>
              <Field as="select" name="feeRange" className="w-full border p-2 rounded">
                <option value="">Select Fee</option>
                {fees.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </Field>
              <ErrorMessage name="feeRange" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Location */}
            <div>
              <label>Location</label>
              <Field name="location" className="w-full border p-2 rounded" />
              <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Profile Image */}
            <div>
              <label>Profile Image (Optional)</label>
              <input
                type="file"
                name="image"
                className="w-full"
                onChange={(event) => setFieldValue("image", event.currentTarget.files?.[0])}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
